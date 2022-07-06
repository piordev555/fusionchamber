import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { SignerWalletAdapterProps } from "@solana/wallet-adapter-base";
import { Connection, PublicKey, Commitment, Transaction } from "@solana/web3.js";
import { createAssociatedTokenAccountInstruction } from "./createAssociatedTokenAccountInstruction";
import { getAccountInfo } from "./getAccountInfo";
import { getAssociatedTokenAddress } from "./getAssociatedTokenAddress";

export async function getOrCreateAssociatedTokenAccount(
  connection: Connection,
  payer: PublicKey,
  mint: PublicKey,
  owner: PublicKey,
  signTransaction: SignerWalletAdapterProps["signTransaction"],
  allowOwnerOffCurve = false,
  commitment?: Commitment,
  programId = TOKEN_PROGRAM_ID,
  associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID
) {
  const associatedToken = await getAssociatedTokenAddress(
    mint,
    owner,
    allowOwnerOffCurve,
    programId,
    associatedTokenProgramId
  );

  let account;

  try {
    account = await getAccountInfo(connection, associatedToken, commitment, programId);
  } catch (error: any) {
    if (
      error.message === "TokenAccountNotFoundError" ||
      error.message === "TokenInvalidAccountOwnerError"
    ) {
      try {
        const transaction = new Transaction().add(
          createAssociatedTokenAccountInstruction(
            payer,
            associatedToken,
            owner,
            mint,
            programId,
            associatedTokenProgramId
          )
        );

        const blockHash = await connection.getLatestBlockhash();
        transaction.feePayer = await payer;
        transaction.recentBlockhash = await blockHash.blockhash;
        const signed = await signTransaction(transaction);

        const signature = await connection.sendRawTransaction(signed.serialize());

        await connection.confirmTransaction(signature);
      } catch (error: unknown) {
        console.log(error);
      }

      account = await getAccountInfo(connection, associatedToken, commitment, programId);

      console.log("Account", account);
    } else {
      throw error;
    }
  }

  if (!account.mint.equals(new PublicKey(mint.toBuffer())))
    throw new Error("TokenInvalidMintError");
  if (!account.owner.equals(new PublicKey(owner.toBuffer())))
    throw new Error("TokenInvalidOwnerError");

  return account;
}
