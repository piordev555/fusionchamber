import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import { RaritySpanElement } from "./styles";
import { RaritySpanProps } from "./types";

const RaritySpan: NextPage<RaritySpanProps> = ({ rank }) => {
  const [rarityData, setRarityData] = useState<any>(null);

  const getRarityLabelData = (rank: number) => {
    if (rank > 3333) throw new Error("Rank must be lower than 3333");

    if (rank < 33) return { label: "Mythic", color: "#ED2939" };
    if (rank < 333) return { label: "Legendary", color: "#FF8101" };
    if (rank < 666) return { label: "Epic", color: "#9A07F6" };
    if (rank < 1333) return { label: "Rare", color: "#00B3FF" };
    if (rank < 2333) return { label: "Uncommon", color: "#20D58A" };
    if (rank < 3333) return { label: "Common", color: "#949494" };
  };

  useEffect(() => {
    setRarityData(getRarityLabelData(parseInt(rank)));
  }, [rank]);

  return (
    rarityData && <RaritySpanElement color={rarityData.color}>{rarityData.label}</RaritySpanElement>
  );
};

export default RaritySpan;
