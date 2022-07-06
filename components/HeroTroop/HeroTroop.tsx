import { NextPage } from "next";
import { useState } from "react";
import CyberApeRenderer from "../CyberApeRenderer";
import { SingleApeData, APE_DATA } from "../../constants/cyberapeage-data";
import { HeroTroopContainer, HeroTroopRendererWrapper } from "./styles";
import { HeroTroopApeData } from "./types";
import { useMediaQuery } from "react-responsive";
import { HERO_TROOP_APES_LIST, HERO_TROOP_APES_LIST_MOBILE } from "./data";

const HeroTroop: NextPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <HeroTroopContainer>
      {isMobile ? (
        <>
          {HERO_TROOP_APES_LIST_MOBILE.map((heroApeData, index) => (
            <HeroTroopRendererWrapper
              key={index}
              zIndex={heroApeData.zIndex}
              centerTranslation={heroApeData.centerTranslation}
            >
              <CyberApeRenderer
                isLookingRight={heroApeData.isLookingRight}
                size={heroApeData.size}
                traits={heroApeData.traits}
              />
            </HeroTroopRendererWrapper>
          ))}
        </>
      ) : (
        <>
          {HERO_TROOP_APES_LIST.map((heroApeData, index) => (
            <HeroTroopRendererWrapper
              key={index}
              zIndex={heroApeData.zIndex}
              centerTranslation={heroApeData.centerTranslation}
            >
              <CyberApeRenderer
                isLookingRight={heroApeData.isLookingRight}
                size={heroApeData.size}
                traits={heroApeData.traits}
              />
            </HeroTroopRendererWrapper>
          ))}
        </>
      )}
    </HeroTroopContainer>
  );
};

export default HeroTroop;
