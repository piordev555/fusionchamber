import React from "react";
import {
  FusionChamberEditArea,
  FusionChamberBoxArea,
  BackButton,
} from "../../styles/FusionChamber";
import { ChamberBox, FusionMonkey, FusionStart } from "./svg";
import { NFTSelectBox } from "./box";

interface Props {
  toNext: () => void;
  toBack: () => void;
}

const FusionChamberSelectComponent: React.FC<Props> = ({ toNext, toBack }) => {
  return (
    <FusionChamberEditArea>
      <FusionChamberBoxArea>
        <FusionMonkey className="monkey" />
        <ChamberBox className="back" />
        <FusionStart className="start" onClick={() => toNext()} />
      </FusionChamberBoxArea>
      <NFTSelectBox />
      <BackButton onClick={() => toBack()}>&lt; back</BackButton>
    </FusionChamberEditArea>
  );
};

export default FusionChamberSelectComponent;
