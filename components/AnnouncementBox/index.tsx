import { useState } from "react";
import {
  AnnouncementContainer,
  AnnouncementSubTitle,
  AnnouncementTitle,
  ArrowButton,
  Dot,
  DotsSlider,
  SlideOutContainer,
} from "./styles";

const TAB_COUNT = 5;

const announcementData = [
  {
    title: "Adding value to our Cyber Apes",
    subTitle: "FEATURED ANNOUNCEMENT",
    body: "Fusion Chambers, Staking, Marketplace and the community providing value into our NFTs and $CYBER/$APE",
  },
  {
    title: "Prizepool",
    subTitle: "ANNOUNCEMENT 2",
    body: "Following on from our DAO vote, 50% revenue sharing has been combined with the prizepool",
  },
  {
    title: "First Cyber Ape Burnt",
    subTitle: "ANNOUNCEMENT 3",
    body: "Officially reducing supply to 3332",
  },
  {
    title: "NFTs being moved over to the SHDW drive",
    subTitle: "ANNOUNCEMENT 4",
    body: "A vote will be taken about moving our Cyber Apes to the SHDW drive - created for Solana with Solana labs and the hardest working devs at GG",
  },
  {
    title: "[REDACTED]",
    subTitle: "ANNOUNCEMENT 3",
    body: "1841480420100678 129898295706 7897089144 42675584288952 389470826946 0397707402 7911470913 33818940642 7475822 753402324",
  },
];

const AnnouncementBox = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [slideElements, setSlideElements] = useState<JSX.Element[]>([]);

  const dots: JSX.Element[] = [];
  for (let i = 0; i < TAB_COUNT; i++) {
    dots.push(<Dot selected={i == tabIndex} key={i} />);
  }

  const addSlideElement = (index: number) => {
    let newElement = (
      <SlideOutContainer key={slideElements.length}>
        <AnnouncementSubTitle>
          {announcementData[index].subTitle}
        </AnnouncementSubTitle>
        <AnnouncementTitle>{announcementData[index].title}</AnnouncementTitle>
        <AnnouncementSubTitle>
          {announcementData[index].body}
        </AnnouncementSubTitle>
      </SlideOutContainer>
    );
    setSlideElements(slideElements.concat(newElement));
  };

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

  return (
    <div className="cut-div black">
      <div className="slider-cut">
        <DotsSlider>{dots}</DotsSlider>

        <div className="arrow-slider">
          <p>
            <ArrowButton onClick={onLeftClick}>&lt;</ArrowButton>{" "}
            <ArrowButton onClick={onRightClick}>&gt;</ArrowButton>
          </p>
        </div>
      </div>
      <AnnouncementContainer>
        <AnnouncementSubTitle>
          {announcementData[tabIndex].subTitle}
        </AnnouncementSubTitle>
        <AnnouncementTitle>
          {announcementData[tabIndex].title}
        </AnnouncementTitle>
        <AnnouncementSubTitle>
          {announcementData[tabIndex].body}
        </AnnouncementSubTitle>
      </AnnouncementContainer>
      {slideElements}
    </div>
  );
};

export default AnnouncementBox;
