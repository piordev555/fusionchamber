import React from "react";
import {
  BackButton,
  AssetSelectArea,
  AssetBoxArea,
  AssetSelectBox,
  AssetDescription,
  AssetSelectionArea,
  AssetBox,
  AssetSymbol,
  AssetLayer,
} from "../../styles/FusionChamber";
import BaseBackground from "../SignatureButton/BaseBackground";
import { ChamberAssetBox, AssetPower, SwitchBox } from "./svg";
import { NFTSelectBox } from "./box";

interface Props {
  toNext: () => void;
  toBack: () => void;
}

const FusionChamberAssetsComponent: React.FC<Props> = ({ toNext, toBack }) => {
  return (
    <AssetSelectArea>
      <AssetBoxArea>
        <ChamberAssetBox className="back" />
        <SwitchBox className="switch first" />
        <SwitchBox className="switch second" />
        <SwitchBox className="switch third" />
        <SwitchBox className="switch fourth" />
        <AssetPower className="start" onClick={() => toNext()} />
      </AssetBoxArea>
      <AssetSelectBox>
        <AssetDescription>
          Choose the traits you want to fuse from #2456. #23 and #3542
        </AssetDescription>
        <AssetSelectionArea>
          <AssetBox>
            <AssetLayer>
              {/* <BaseBackground backgroundColor="#fff" /> */}
            </AssetLayer>
            <AssetLayer />
            <AssetLayer />
          </AssetBox>
          <AssetSymbol />
        </AssetSelectionArea>
        <AssetSelectionArea>
          <AssetBox>
            <AssetLayer />
            <AssetLayer />
            <AssetLayer />
          </AssetBox>
          <AssetSymbol />
        </AssetSelectionArea>
      </AssetSelectBox>
      <BackButton onClick={() => toBack()}>&lt; back</BackButton>
    </AssetSelectArea>
  );
};

export default FusionChamberAssetsComponent;
