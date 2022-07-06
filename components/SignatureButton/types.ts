import { CSSProperties } from "react";
import { CSSObject } from "styled-components";

export interface SignatureButtonProps {
  onClick: () => void;
  isContrast?: boolean;
  accent: CSSProperties["color"];
  backgroundColor?: CSSProperties["color"];
  children: React.ReactNode;
  customStyle?: CSSObject;
}

export interface SignatureButtonContainerProps {
  customStyle?: CSSObject;
}

export interface MovingBackgroundProps {
  isHover: boolean;
}

export interface MovingBackgroundContainerProps {
  isHover: boolean;
}

export interface SparksProps {
  accent: CSSProperties["color"];
}

export interface ColoredSparksProps {
  accent: CSSProperties["color"];
}

export interface AccentSparkGroupProps {
  accent: CSSProperties["color"];
}

export interface ContrastBaseBackgroundFilledProps {
  accent: CSSProperties["color"];
}

export interface SignatureButtonContentWrapperProps {
  contentColor?: CSSProperties["color"];
  isHover: boolean;
}
