import { NextApiRequest, NextApiResponse } from "next";
import TokenData from "./token-rarity.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(TokenData);
  } else {
    res.status(400).json({ error: "Bad Request" });
  }
}
