import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { viewItemAmountByWalletAddress } from "../../../lib/redis";
import { InventoryItemData, ResponseJSON } from "../../../types";

async function onPost(req: NextApiRequest, res: NextApiResponse) {
  const hasAddress = req.body.address;
  const hasItem = req.body.item;

  if (!hasAddress || !hasItem) {
    res.status(400).json({
      success: false,
      errorCode: "BAD_REQUEST",
      errorMessage: "Must provide address and item.",
      data: req.body,
      meta: {
        time: new Date().toISOString(),
      },
    } as ResponseJSON<InventoryItemData>);
  }

  try {
    const itemAmount = await viewItemAmountByWalletAddress(req.body.address, req.body.item);

    if (itemAmount) {
      res.status(200).json({
        success: true,
        data: {
          amount: itemAmount,
        },
        meta: {
          time: new Date().toISOString(),
        },
      } as ResponseJSON<{ amount: number }>);
    } else {
      res.status(200).json({
        success: false,
        data: {
          amount: 0,
        },
        meta: {
          time: new Date().toISOString(),
        },
      } as ResponseJSON<{ amount: number }>);
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      errorCode: "INTERNAL_SERVER_ERROR",
      errorMessage: `Failed trying to find how many items of type: "${req.body.item}", ${req.body.address} owns.`,
      data: req.body,
      meta: {
        time: new Date().toISOString(),
      },
    } as ResponseJSON<InventoryItemData>);
  }
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
