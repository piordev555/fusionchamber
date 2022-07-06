import { CSSProperties } from "styled-components";
import { CyberApe } from "../../types/ape-traits";

export interface CyberApeProps {
  isLookingRight?: boolean;
  size?: CSSProperties["width"];
  traits: CyberApe;
}

export interface CyberApeTraitContainerProps {
  isLookingRight?: boolean;
  size?: CSSProperties["width"];
}
