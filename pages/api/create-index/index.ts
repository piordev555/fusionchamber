import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { ResponseJSON } from "../../../types";
import { SHOP_ITEMS } from "../../../data/shop";
import { createIndex } from "../../../lib/redis";

async function onGet(req: NextApiRequest, res: NextApiResponse) {
  const redisIndex = await createIndex();

  res.status(200).json({
    success: true,
    data: {},
    meta: {
      time: new Date().toISOString(),
    },
  } as ResponseJSON<{}[]>);
}

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Yeah right... There's something broken for sure.." });
  },
  onNoMatch: (req, res) => {
    res.status(404).json({ message: "Nothing to see here..." });
  },
}).get(onGet);

export default handler;
