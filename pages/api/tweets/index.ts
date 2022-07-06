import { NextApiRequest, NextApiResponse } from "next";
import Twitter from "twitter";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const TWITTER_AUTH = {
    consumer_key: process.env.TWITTER_APP_API_KEY,
    consumer_secret: process.env.TWITTER_APP_API_SECRET,
    bearer_token: process.env.TWITTER_APP_BEARER_TOKEN,
  };

  // @ts-ignore
  const TWITTER = new Twitter(TWITTER_AUTH);

  let twitterData: any = [];

  await TWITTER.get("search/tweets", {
    q: "CyberApeAge",
    count: 20,
  })
    .then((res) => {
      twitterData = res.statuses;
    })
    .catch((err) => {
      console.error(err);
    });

  if (req.method === "GET") {
    res.status(200).json(JSON.stringify(twitterData));
  } else {
    res.status(400).json({ error: "Couldn't get twitter data" });
  }
}
