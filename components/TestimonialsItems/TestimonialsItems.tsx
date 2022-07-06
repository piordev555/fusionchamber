import { motion } from "framer-motion";
import { GetServerSidePropsContext, NextPage } from "next/types";
import { useEffect, useState } from "react";
import BloomingContainer from "../BloomingContainer";
import TwitterIcon from "../TwitterIcon";
import { TestimonialsItemsContainer, TwitterCardsRow } from "./styles";
import TwitterCard from "./TwitterCard";
import { TestimonialsItemsProps } from "./types";

const TestimonialsItems: NextPage<TestimonialsItemsProps> = ({ twitterData }) => {
  const [firstRowList, setFirstRowList] = useState<any>(null);
  const [secondRowList, setSecondRowList] = useState<any>(null);

  const splitTwitterData = () => {
    if (!twitterData) throw new Error("No twitter data provided to populate testimonials!");

    const INITIAL_LIST = [...twitterData];

    const LIST_MIDDLE = Math.floor(INITIAL_LIST.length / 2);
    const FIRST_HALF = INITIAL_LIST.slice(0, LIST_MIDDLE);
    const SECOND_HALF = INITIAL_LIST.slice(LIST_MIDDLE);

    setFirstRowList(FIRST_HALF);
    setSecondRowList(SECOND_HALF);
  };

  useEffect(splitTwitterData, [twitterData]);

  return (
    <TestimonialsItemsContainer>
      <TwitterCardsRow>
        {firstRowList &&
          firstRowList.map((tweet: any, index: number) => (
            <TwitterCard key={index} tweetData={tweet} />
          ))}
      </TwitterCardsRow>
      <TwitterCardsRow>
        {secondRowList &&
          secondRowList.map((tweet: any, index: number) => (
            <TwitterCard key={index} tweetData={tweet} />
          ))}
      </TwitterCardsRow>
    </TestimonialsItemsContainer>
  );
};

export default TestimonialsItems;
