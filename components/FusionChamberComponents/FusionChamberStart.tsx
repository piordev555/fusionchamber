import React from "react";
import {
  MainContainer,
  FusionChamberStart,
  FusionChamberStartButton,
} from "../../styles/FusionChamber";
import Script from "next/script";

interface Props {
  toNext: () => void;
}

const FusionChamberStartComponent: React.FC<Props> = ({ toNext }) => {
  return (
    <>
      {/* <div className="wordart" data-wordart-src="" /> */}
      <MainContainer>
        <FusionChamberStart>
          <FusionChamberStartButton onClick={() => toNext()} />
        </FusionChamberStart>
      </MainContainer>
      {/* <Script id="stripe-js" src="/bg.js" /> */}
    </>
  );
};

export default FusionChamberStartComponent;
