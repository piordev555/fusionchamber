import { CSSProperties } from "styled-components";
import { CyberApe } from "../../types/ape-traits";

export interface CyberApeSearchProps {
  identifier?: string;
}

export interface ApeData {
  index: string;
  token: string;
  rank: string;
  traits: CyberApe;
}

export interface RaritySpanProps {
  rank: string;
}

export interface RaritySpanElementProps {
  color: CSSProperties["color"];
}

export interface CyberApeSearchWalletApeButtonProps {
  isSelectedApe: boolean;
}
