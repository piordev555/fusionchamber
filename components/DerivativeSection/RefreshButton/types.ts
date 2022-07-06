import { CSSProperties } from "react";

export interface RefreshButtonProps {
  onClick: () => void;
  isContrast?: boolean;
  accent: CSSProperties["color"];
  children: React.ReactNode;
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

export interface CountdownBackgroundProps {
  accent: CSSProperties["color"];
}

export interface RefreshButtonContentWrapperProps {
  contentColor?: CSSProperties["color"];
  isHover: boolean;
}
