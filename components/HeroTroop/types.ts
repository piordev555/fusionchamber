import { ApeData } from "../../constants/cyberapeage-data";
import { CyberApe } from "../../types/ape-traits";

export interface HeroTroopRendererWrapperProps {
  zIndex: number;
  centerTranslation: string;
}

export interface HeroTroopApeData {
  isLookingRight?: boolean;
  size: string;
  zIndex: number;
  centerTranslation: string;
  traits: CyberApe;
}
