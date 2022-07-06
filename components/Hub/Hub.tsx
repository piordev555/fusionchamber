import { useContext } from "react";
import WalletTokensContext from "../../contexts/WalletTokens";
import { useWallet } from "@solana/wallet-adapter-react";
import { NextPage } from "next/types";
import { HubContainerProps } from "./types";
import {
  HubInner,
  HubOuter,
  Title,
  Subtitle,
  ApesSliderContainer,
  ApeCardContainer,
} from "./styles";
import HubPlaceholder from "../HubPlaceholder";
import HorizontalSlider from "../HorizontalSlider";

const Hub: NextPage<HubContainerProps> = () => {
  const { apeAmount, cyberAmount, apes } = useContext(WalletTokensContext);
  const { connected, publicKey } = useWallet();

  return (
    <HubOuter>
      {connected && (
        <div style={{ marginTop: "2rem" }}>
          <Title>lockdown A CYBER APE TO MINE $CYBER</Title>
          <Subtitle>
            CLICK HERE TO CHOOSE ONE OR MULTIPLE CYBER APES TO STAKE
          </Subtitle>
        </div>
      )}
      <HubInner>
        {!connected && <HubPlaceholder />}
        {connected && apes.length > 0 && (
          <HorizontalSlider hasControls>
            <ApesSliderContainer>
              <ApeCardContainer />
              <ApeCardContainer />
              <ApeCardContainer />
            </ApesSliderContainer>
          </HorizontalSlider>
        )}
      </HubInner>
    </HubOuter>
  );
};

export default Hub;
