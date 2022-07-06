import { motion } from "framer-motion";
import { NextPage } from "next/types";
import Image from "next/image";
import BloomingContainer from "../BloomingContainer";
import TwitterIcon from "../TwitterIcon";
import { TwitterCardProps } from "./types";
import { TwitterCardContainer } from "./styles";

const TwitterCard: NextPage<TwitterCardProps> = ({ tweetData }) => {
  return (
    <TwitterCardContainer>
      <BloomingContainer
        accent="#303030"
        customStyles={{
          pointerEvents: "none",
          padding: "1rem",
          width: "max-content",
        }}
      >
        <header>
          <div>
            <TwitterIcon />
            <img src={tweetData.user.profile_image_url_https} alt="profile image" />
            <a
              href={`https://twitter.com/${tweetData.user.screen_name}`}
              target="_blank"
              rel="noreferrer"
            >
              @{tweetData.user.screen_name}
            </a>
          </div>
          <span>
            {tweetData.created_at.split(" ")[1]} {tweetData.created_at.split(" ")[2]}
          </span>
        </header>
        <main>
          <p>{tweetData.text}</p>
        </main>
      </BloomingContainer>
    </TwitterCardContainer>
  );
};

export default TwitterCard;
