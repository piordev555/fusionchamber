import { web3 } from "@project-serum/anchor";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import axios from "axios";
import { NextPage } from "next/types";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import WalletTokensContext from "../../contexts/WalletTokens";
import BloomingContainer from "../BloomingContainer";
import BeakersIcon from "./BeakersIcon";
import BoostIcon from "./BoostIcon";
import WLIcon from "./WLIcon";
import UpgradeIcon from "./UpgradeIcon";
import { createTransferInstruction } from "./createTransferInstructions";
import { getOrCreateAssociatedTokenAccount } from "./getOrCreateAssociatedTokenAccount";
import {
  ShopItemBuyButton,
  ShopItemControls,
  ShopItemImageContainer,
  ShopItemInfo,
} from "./styles";

const ShopItem: NextPage<any> = ({ item }) => {
  const { publicKey, sendTransaction, signTransaction } = useWallet();
  const { checkTokensAmount, apeAmount, cyberAmount } = useContext(WalletTokensContext);
  const { connection } = useConnection();
  const itemAmountSpanRef = useRef<HTMLSpanElement>(null);

  const [itemAmount, setItemAmount] = useState<number>(0);
  const [isCheckingAmount, setIsCheckingAmount] = useState<boolean>(false);
  const [isBuyingItem, setIsBuyingItem] = useState<boolean>(false);
  const [buyingStateLog, setBuyingStateLog] = useState<string>("");

  const icons: any = {
    beakers: <BeakersIcon />,
    booster: <BoostIcon />,
    WL: <WLIcon />,
    Upgrade: <UpgradeIcon />,
  };

  function flickerItemAmountSpan() {
    if (!itemAmountSpanRef.current) return;

    itemAmountSpanRef.current.style.border = "1px solid white";

    itemAmountSpanRef.current.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      iterations: 4,
    });

    setTimeout(() => {
      if (!itemAmountSpanRef.current) return;

      itemAmountSpanRef.current.style.border = "1px solid rgba(255, 255, 255, 0.05)";
    }, 150 * 3);
  }

  const DEST_PUBKEY: PublicKey = new web3.PublicKey("2AqxsjHqDXp3ost4fZ9vhdtFcko3kUVzZLrTv7MG9QPZ");

  const buyItem = useCallback(
    async (itemCode: string, toPubkey: string, amount: number) => {
      if (!toPubkey || !amount) return;

      setIsBuyingItem(true);
      setBuyingStateLog("processing");

      try {
        if (!publicKey || !signTransaction) throw new WalletNotConnectedError();

        const PAYMENT_DESTINATION_PUBKEY = new PublicKey(toPubkey);
        const APE_MINT = new PublicKey("E3RN9omoTNdqKXGj988X8JuCXwNZ6ZHXbfpaZ1nVZbrA");

        const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
          connection,
          publicKey,
          APE_MINT,
          publicKey,
          signTransaction
        );

        const toTokenAccount = await getOrCreateAssociatedTokenAccount(
          connection,
          DEST_PUBKEY,
          APE_MINT,
          PAYMENT_DESTINATION_PUBKEY,
          signTransaction
        );

        const transaction = new Transaction().add(
          createTransferInstruction(
            fromTokenAccount.address,
            toTokenAccount.address,
            publicKey,
            amount * 1_000_000,
            [],
            TOKEN_PROGRAM_ID
          )
        );

        setBuyingStateLog("signing");

        const { blockhash } = await connection.getLatestBlockhash();

        transaction.feePayer = await publicKey;
        transaction.recentBlockhash = await blockhash;

        const transactionSignature = await sendTransaction(transaction, connection);

        const confirmationResponse = await connection.confirmTransaction(
          transactionSignature,
          "finalized"
        );

        if (confirmationResponse.context.slot) {
          setBuyingStateLog("verifying");

          const apiResponse = await axios.post("/api/inventory/add", {
            item: itemCode,
            address: publicKey.toString(),
            signature: transactionSignature.toString(),
          });

          if (apiResponse.status === 200) {
            flickerItemAmountSpan();

            setItemAmount((previous) => previous + 1);

            checkTokensAmount();
          }
        }

        setBuyingStateLog("");
        setIsBuyingItem(false);
      } catch (error: any) {
        console.error(error);
        setBuyingStateLog("");
        setIsBuyingItem(false);
      }
    },
    [publicKey, sendTransaction, connection]
  );

  function checkItemAmount() {
    if (!publicKey) return setIsCheckingAmount(false);

    setIsCheckingAmount(true);

    fetch("/api/inventory/amount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: publicKey.toString(),
        item: item.code,
      }),
    })
      .then(async (res) => {
        if (res.ok) {
          const result = await res.json();

          setItemAmount(result.data.amount);
          setIsCheckingAmount(false);

          return;
        }

        setItemAmount(0);
        setIsCheckingAmount(false);
      })
      .catch((err) => {
        setItemAmount(0);
        setIsCheckingAmount(false);
        console.error(err);
      });
  }

  useEffect(checkItemAmount, [publicKey]);

  return (
    <BloomingContainer
      accent="#4d4d4d"
      customStyles={{
        width: "25%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.75rem",
        border: "none",
      }}
    >
      <ShopItemImageContainer>{icons[item.code]}</ShopItemImageContainer>
      <ShopItemInfo>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </ShopItemInfo>
      <ShopItemControls itemAmount={itemAmount}>
        <ShopItemBuyButton
          isBuying={isBuyingItem}
          onClick={() =>
            buyItem(item.code, "2AqxsjHqDXp3ost4fZ9vhdtFcko3kUVzZLrTv7MG9QPZ", item.price)
          }
        >
          <h1>{isBuyingItem ? buyingStateLog : `BUY ${item.type}`}</h1>
          <span>{isBuyingItem ? "hold tight" : `${item.price} $${item.token}`}</span>
        </ShopItemBuyButton>
        <span ref={itemAmountSpanRef}>{itemAmount ? itemAmount : "0"}</span>
      </ShopItemControls>
    </BloomingContainer>
  );
};

export default ShopItem;
