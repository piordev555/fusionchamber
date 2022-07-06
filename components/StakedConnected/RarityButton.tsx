import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import * as Diamonds from './Diamonds';
import { 
  RarityBtnElem, 
  RarityBtnContainer, 
  RarityBtnInnerContainer 
} from "./styles";
import { RarityButtonProps } from "./types";

const RarityButton: NextPage<RarityButtonProps> = ({ rank }) => {
  const [rarityData, setRarityData] = useState<any>(null);

  const getRarityLabelData = (rank: number) => {
    if (rank > 3333) throw new Error("Rank must be lower than 3333");

    if (rank < 33) 
      return { 
        label: "Mythic", 
        color: "#ED2939", 
        bgColor: "#210000", 
        icon: <Diamonds.Mythic />,
        rare: false
      };
    if (rank < 333) 
      return { 
        label: "Legendary", 
        color: "#FF8101", 
        bgColor: "#211100", 
        icon: <Diamonds.Legendary />,
        rare: false};
    if (rank < 666) 
      return { 
        label: "Epic", 
        color: "#9A07F6", 
        bgColor: "#140120", 
        icon: <Diamonds.Epic />,
        rare: false};
    if (rank < 1333) 
      return { 
        label: "Rare", 
        color: "#00B3FF", 
        bgColor: "#001721", 
        icon: <Diamonds.Rare />,
        rare: true};
    if (rank < 2333) 
      return { 
        label: "Uncommon", 
        color: "#20D58A", 
        bgColor: "#041C12", 
        icon: <Diamonds.Uncommon />,
        rare: true};
    if (rank < 3333) 
      return { 
        label: "Common", 
        color: "#949494", 
        bgColor: "#131313", 
        icon: <Diamonds.Common />,
        rare: true};
  };

  useEffect(() => {
    setRarityData(getRarityLabelData(parseInt(rank)));
  }, [rank]);

  return (
    rarityData &&
    <RarityBtnContainer 
      color={rarityData.color}
      size={6}
      rare={rarityData.rare}>

      <RarityBtnInnerContainer 
        color={rarityData.bgColor} 
        size={6} 
        rare={rarityData.rare}>
        {rarityData.icon}
        
        <RarityBtnElem
          color={rarityData.color}
          size={0}
          >
          {rarityData.label}
        </RarityBtnElem>
      </RarityBtnInnerContainer> 
    </RarityBtnContainer> 
    
  );
};

export default RarityButton;
