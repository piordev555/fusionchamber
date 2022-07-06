import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useCallback } from "react";
import { toast } from "react-hot-toast";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { getOrCreateAssociatedTokenAccount } from "./getOrCreateAssociatedTokenAccount";
import { createTransferInstruction } from "./createTransferInstructions";

interface Props {
  children: (sendTransaction: OnSendTransaction) => React.ReactNode;
}

type OnSendTransaction = (toPublicKey: string, amount: number) => void;

const SendTransaction: React.FC<Props> = ({ children }) => {
  const { connection } = useConnection();
  const { publicKey, signTransaction, sendTransaction } = useWallet();

  const onSendSPLTransaction = useCallback(
    async (toPubkey: string, amount: number) => {
      if (!toPubkey || !amount) return;
      const toastId = toast.loading("Processing transaction...");

      try {
        if (!publicKey || !signTransaction) throw new WalletNotConnectedError();
        const toPublicKey = new PublicKey(toPubkey);
        const mint = new PublicKey("MINT ADDRESS");

        const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
          connection,
          publicKey,
          mint,
          publicKey,
          signTransaction
        );

        const toTokenAccount = await getOrCreateAssociatedTokenAccount(
          connection,
          publicKey,
          mint,
          toPublicKey,
          signTransaction
        );

        const transaction = new Transaction().add(
          createTransferInstruction(
            fromTokenAccount.address,
            toTokenAccount.address,
            publicKey,
            amount * LAMPORTS_PER_SOL,
            [],
            TOKEN_PROGRAM_ID
          )
        );

        const blockHash = await connection.getRecentBlockhash();
        transaction.feePayer = await publicKey;
        transaction.recentBlockhash = await blockHash.blockhash;
        const signed = await signTransaction(transaction);

        await connection.sendRawTransaction(signed.serialize());

        toast.success("Transaction sent", {
          id: toastId,
        });
      } catch (error: any) {
        toast.error(`Transaction failed: ${error.message}`, {
          id: toastId,
        });
      }
    },
    [publicKey, sendTransaction, connection]
  );

  return <>{children(onSendSPLTransaction)}</>;
};

export default SendTransaction;
