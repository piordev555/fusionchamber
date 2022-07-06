import { NextApiRequest, NextApiResponse } from "next";
import { TokenData } from "../../../types";
import TOKEN_DATA_RAW from "./token-rarity.json";

function searchByToken(token: string): TokenData | undefined {
  const TOKEN_DATA: { [key: string]: TokenData } = JSON.parse(JSON.stringify(TOKEN_DATA_RAW));
  const tokenDataFiltered = Object.values(TOKEN_DATA).filter(
    (tokenDataItem: TokenData) =>
      tokenDataItem.token.toString().toLowerCase() === token.toLowerCase()
  );
  return tokenDataFiltered[0];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const REQUEST_IDENTIFIER: string = req.query.id.toString();
  const TOKEN_DATA: { [key: string]: TokenData } = JSON.parse(JSON.stringify(TOKEN_DATA_RAW));

  let filteredApe: TokenData;

  const apeByID: TokenData = TOKEN_DATA[REQUEST_IDENTIFIER];
  const apeByToken: TokenData | undefined = searchByToken(REQUEST_IDENTIFIER);

  filteredApe = apeByID || apeByToken;

  if (filteredApe) {
    res.status(200).json(filteredApe);
  } else {
    res
      .status(404)
      .json({ message: `Cyber Ape with identifier "${REQUEST_IDENTIFIER}" was not found.` });
  }
}
