import { AccountLayout } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js";
import axios from "axios";
import { TokenData } from "../../types";
import { CYBERAPE_TOKEN_LIST } from "./tokenList";

const connection = new Connection("https://api.mainnet-beta.solana.com");

const getWalletNfts = (pubkey: PublicKey): Promise<TokenData[] | null> => {
  return new Promise(async (resolve, _) => {
    const TOKEN_PROGRAM_ID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");

    let cyberApeNftsInWallet: TokenData[] = [];

    const response = await connection.getTokenAccountsByOwner(pubkey, {
      programId: TOKEN_PROGRAM_ID,
    })
    .catch((err) => {
      console.log(err);
    });

    if (response) {
      const TOKEN_LIST = response.value;
      
      for (let i = 0; i < TOKEN_LIST.length; i++) {
        const TOKEN = TOKEN_LIST[i];

        const ACCOUNT_INFO = AccountLayout.decode(TOKEN.account.data);
        const isSingle = parseInt(ACCOUNT_INFO.amount.toString()) === 1;
        
        if (!isSingle) continue;

        const isCyberApe = CYBERAPE_TOKEN_LIST.includes(ACCOUNT_INFO.mint.toString());

        if (isCyberApe)
          await axios
            .get("/api/cyberapeage/" + ACCOUNT_INFO.mint.toString())
            .then((res) => {
              if (res) cyberApeNftsInWallet.push(res.data);
            })
            .catch((err) => console.log(err));
      }
    }

    if (cyberApeNftsInWallet.length > 0) resolve(cyberApeNftsInWallet);
    else resolve(null);
  });
};

export default getWalletNfts;
