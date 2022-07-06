import { NextPage } from "next/types";
import { useState } from "react";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";
import { HomeContainer } from "../styles/Home";
import {
  EmptyContainer,
  DefaultHeaderContainer,
  BottomContainer,
} from "../styles/FusionChamber";
import {
  FusionCamberStartComponent,
  FusionChamberAssetsComponent,
  FusionChamberDoneComponent,
  FusionChamberProcessComponent,
  FusionChamberSelectComponent,
} from "../components/FusionChamberComponents";

const AstralBreakersPage: NextPage = () => {
  const [step, setStep] = useState<number>(0);

  const goTo = (s: number) => {
    setStep(s);
  };

  return (
    <>
      <HomeContainer>
        <GlobalHeader />
        <EmptyContainer />
        <DefaultHeaderContainer>FUSION CHAMBERS</DefaultHeaderContainer>
        {step == 0 && <FusionCamberStartComponent toNext={() => goTo(1)} />}
        {step == 1 && (
          <FusionChamberSelectComponent
            toNext={() => goTo(2)}
            toBack={() => goTo(0)}
          />
        )}
        {step == 2 && (
          <FusionChamberAssetsComponent
            toNext={() => goTo(3)}
            toBack={() => goTo(1)}
          />
        )}
        {step == 3 && <FusionChamberProcessComponent toNext={() => goTo(4)} />}
        {step == 4 && <FusionChamberDoneComponent toNext={() => goTo(5)} />}
        <BottomContainer />
      </HomeContainer>
    </>
  );
};

export default AstralBreakersPage;
