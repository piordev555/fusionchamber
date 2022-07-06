import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { addIventoryItem, getInventoryItemByTxSignature } from "../../../lib/redis";
import { InventoryItemData, Item, ResponseJSON } from "../../../types";
import { Connection } from "@solana/web3.js";
import axios from "axios";

const ITEM_PRICE: any = {
  booster: 2,
  beakers: 5,
  WL: 2,
  Upgrade: 2,
};

function isOfTypeItem(item: Item): item is Item {
  let validItems: Item[] = ["booster", "beakers", "WL", "Upgrade"];
  return validItems.includes(item);
}

async function isSignatureValid(
  owner: string,
  signature: string,
  item: string
): Promise<boolean | undefined> {
  // TODO: implement signature validation
  // const solanaConnection = new Connection("https://api.mainnet-beta.solana.com");

  // const SOLSCAN_API_ENDPOINT = "https://public-api.solscan.io/transaction/";

  // const transactionResponse = await axios.get(SOLSCAN_API_ENDPOINT + signature);

  // if (!transactionResponse) return false;

  // const transaction = transactionResponse.data;

  // console.log("transactionResponse\n", transactionResponse, "transaction\n", transaction);

  // const isCorrectAmount = transaction.tokenTransfers.amount / 1_000_000 >= ITEM_PRICE[item];
  // const isCorrectOwner = transaction.tokenTransfers["source_owner"].toString() === owner.toString();

  // if (!isCorrectAmount || !isCorrectOwner) return false;

  const isUsed = await getInventoryItemByTxSignature(signature);

  if (isUsed) return false;

  return true;
}

async function onPost(req: NextApiRequest, res: NextApiResponse) {
  const hasSignature = req.body.signature;
  const hasAddress = req.body.address;
  const hasItem = req.body.item;
  const hasValidItem = isOfTypeItem(req.body.item);

  if (!hasSignature || !hasAddress || !hasItem || !hasValidItem) {
    res.status(400).json({
      success: false,
      errorCode: "BAD_REQUEST",
      errorMessage: "Must have a valid signature, address and item.",
      data: req.body,
      meta: {
        time: new Date().toISOString(),
      },
    } as ResponseJSON<InventoryItemData>);
  }

  const isSignatureValidated = await isSignatureValid(
    req.body.address,
    req.body.signature,
    req.body.item
  );

  if (!isSignatureValidated) {
    res.status(400).json({
      success: false,
      errorCode: "BAD_REQUEST",
      errorMessage: `Signature "${req.body.signature}" couldn't be validated.`,
      data: req.body,
      meta: {
        time: new Date().toISOString(),
      },
    } as ResponseJSON<InventoryItemData>);
  }

  const redisID = await addIventoryItem({
    signature: req.body.signature,
    address: req.body.address,
    item: req.body.item,
  });

  if (!redisID) {
    res.status(400).json({
      success: false,
      errorCode: "INTERNAL_SERVER_ERROR",
      errorMessage: `Failed to add inventory item: "${req.body.item}" to ${req.body.address}.`,
      data: req.body,
      meta: {
        time: new Date().toISOString(),
      },
    } as ResponseJSON<InventoryItemData>);
  }

  res.status(200).json({
    success: true,
    data: req.body,
    meta: {
      time: new Date().toISOString(),
    },
  } as ResponseJSON<InventoryItemData>);
}

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Yeah right... There's something broken for sure.." });
  },
  onNoMatch: (req, res) => {
    res.status(404).json({ message: "Nothing to see here..." });
  },
}).post(onPost);

export default handler;
