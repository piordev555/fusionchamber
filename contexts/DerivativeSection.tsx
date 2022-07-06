import { NextPage } from "next/types";
import React, { createContext, useEffect, useState } from "react";
import { APE_DATA, SingleApeData } from "../constants/cyberapeage-data";
import { getRandomApeIndex } from "../utils";
import { DerivativeSectionContextData, DerivativeSectionContextProviderProps } from "./types";

const DerivativeSectionContext = createContext({} as DerivativeSectionContextData);

export const DerivativeSectionContextProvider: NextPage<DerivativeSectionContextProviderProps> = ({
  children,
}) => {
  let interval: NodeJS.Timeout;

  const [currentApeData, setCurrentApeData] = useState<SingleApeData>(
    APE_DATA[getRandomApeIndex()]
  );

  function rerollCurrentApe(): void {
    const randomApeIndex = getRandomApeIndex();
    const randomApe: SingleApeData = APE_DATA[randomApeIndex];

    setCurrentApeData(randomApe);
    clearInterval(interval);
  }

  useEffect(() => {
    interval = setInterval(rerollCurrentApe, 6000);

    return () => clearInterval(interval);
  }, [currentApeData]);

  return (
    <DerivativeSectionContext.Provider value={{ currentApeData, rerollCurrentApe }}>
      {children}
    </DerivativeSectionContext.Provider>
  );
};

export default DerivativeSectionContext;
