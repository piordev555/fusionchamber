import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  AnnouncementContainer,
  AnnouncementSubTitle,
  AnnouncementTitle,
  ArrowButton,
  Dot,
  DotsSlider,
  SlideOutContainer,
} from "../../AnnouncementBox/styles";
import {
  CardSelectArea,
  SteperBox,
  CardBox,
} from "../../../styles/FusionChamber";
import NFTCard from "../card/NFTCard";

interface cardProps {
  url: string;
  type: string;
}

const cardData = [
  {
    url: "/ape1.png",
    type: "legendary",
  },
  {
    url: "/epic.png",
    type: "epic",
  },
  {
    url: "/mythic.png",
    type: "mythic",
  },
  {
    url: "/epic.png",
    type: "epic",
  },
  {
    url: "/epic.png",
    type: "epic",
  },
  {
    url: "/ape1.png",
    type: "legendary",
  },
  {
    url: "/ape1.png",
    type: "legendary",
  },
  {
    url: "/ape1.png",
    type: "legendary",
  },
  {
    url: "/ape1.png",
    type: "legendary",
  },
  {
    url: "/epic.png",
    type: "epic",
  },
  {
    url: "/ape1.png",
    type: "legendary",
  },
  {
    url: "/ape1.png",
    type: "legendary",
  },
  {
    url: "/ape1.png",
    type: "legendary",
  },
];

const TAB_COUNT = Math.ceil(cardData.length / 9);

const NFTSelectBox = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [cards, setCards] = useState([]);

  const dots: JSX.Element[] = [];
  for (let i = 0; i < TAB_COUNT; i++) {
    dots.push(<Dot selected={i == tabIndex} key={i} />);
  }

  const addSlideElement = (index: number) => {};

  const onLeftClick = () => {
    if (tabIndex == 0) {
      addSlideElement(tabIndex);
      setTabIndex(TAB_COUNT - 1);
    } else {
      addSlideElement(tabIndex);
      setTabIndex(tabIndex - 1);
    }
  };

  const onRightClick = () => {
    if (tabIndex == TAB_COUNT - 1) {
      addSlideElement(tabIndex);
      setTabIndex(0);
    } else {
      addSlideElement(tabIndex);
      setTabIndex(tabIndex + 1);
    }
  };

  useEffect(() => {
    console.log(tabIndex);

    var tempcards = [];
    for (
      var i = tabIndex * 9;
      i <=
      tabIndex * 9 +
        ((cardData.length - tabIndex * 9) / 9 >= 1
          ? 8
          : ((cardData.length - tabIndex * 9) % 9) - 1);
      i++
    ) {
      tempcards.push(cardData[i]);
    }
    console.log(tempcards);
    setCards(tempcards);
  }, [tabIndex]);

  return (
    <CardSelectArea>
      <CardBox>
        {cards.map((item) => {
          return <NFTCard url={item.url} type={item.type} />;
        })}
      </CardBox>
      <SteperBox>
        <p>
          <ArrowButton onClick={onLeftClick}>&lt;</ArrowButton>{" "}
          <ArrowButton onClick={onRightClick}>&gt;</ArrowButton>
        </p>
        <DotsSlider>{dots}</DotsSlider>
      </SteperBox>
    </CardSelectArea>
  );
};

export default NFTSelectBox;
