import { SingleApeData } from "../constants/cyberapeage-data";
import { CartesianCoords } from "../types";

export interface SuperModalContextProviderProps {
  children?: React.ReactNode;
}

export interface SuperModalContextData {
  isSuperModalOpen: boolean;
  open: (title: string, children: React.ReactNode) => void;
  close: () => void;
}

export interface DerivativeSectionContextData {
  currentApeData: SingleApeData;
  rerollCurrentApe: () => void;
}

export interface DerivativeSectionContextProviderProps {
  children?: React.ReactNode;
}

export interface GlobalContextProps {
  children?: React.ReactNode;
}

export interface MobileMenuContextProviderProps {
  children?: React.ReactNode;
}

export interface MobileMenuContextData {
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export interface BloomingDataContextData {
  currentMouseCoords: CartesianCoords;
}

export interface BloomingDataContextProviderProps {
  children?: React.ReactNode;
}

export interface WalletTokensContextProviderProps {
  children?: React.ReactNode;
}

export interface WalletTokensContextData {
  checkTokensAmount: () => void;
  apeAmount: number;
  cyberAmount: number;
}

export interface WalletProps {
  children?: React.ReactNode;
}
