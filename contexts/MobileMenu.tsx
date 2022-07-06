import { NextPage } from "next/types";
import React, { createContext, useState } from "react";
import MobileMenu from "../components/MobileMenu";
import { MobileMenuContextData, MobileMenuContextProviderProps } from "./types";

const MobileMenuContext = createContext({} as MobileMenuContextData);

export const MobileMenuContextProvider: NextPage<MobileMenuContextProviderProps> = ({
  children,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <MobileMenuContext.Provider value={{ openMobileMenu, closeMobileMenu }}>
      {children}
      {isMobileMenuOpen && <MobileMenu />}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuContext;
