import { CSSProperties, CSSObject } from "styled-components";
import { CyberApe } from "../../types/ape-traits";

export interface RankSectionProps {
    index: string;
    rank: string;
  }

  export interface RarityButtonProps {
    rank: string;
  }

  export interface RarityBtnElemProps {
    color: CSSProperties["color"];
    size: number;
    rare?: boolean | false;
  }

export interface WalletApesDataProps {
    traits: CyberApe;
    timeInLockdown: string;
    totalDays: number;
    cyberProgress: number;
    rewardedSecond: number;
    totalSecond: number;
}

export interface ApeItemDetailPartProps {
  mainTitle: string,
  mainText: string,
  summary: string,
  totalAmount: number,
  progress: number
}

export interface CustomStylesProps {
  customStyles?: CSSObject;
}

export interface ClipStepSizeProps {
  size: number;
}

export interface ApeSizeProps {
  widthSize?: number | null;
  heightSize?: number | null;
}