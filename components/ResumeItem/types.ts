import React, { CSSProperties } from "react";
import { CartesianCoords } from "../../types";

type PipeOrigin = "left" | "right";

export interface ResumeItemProps {
  accent: CSSProperties["color"];
  icon: React.ReactNode | null;
  title: string;
  borderImageUrl: string;
  description: string;
  pipeOrigin: PipeOrigin;
}

export interface ResumeIconProps {
  fill: CSSProperties["color"];
  stroke: CSSProperties["color"];
}

export interface PipeBodyProps {
  accent: CSSProperties["color"];
}

export interface PipeHeadProps {
  accent: CSSProperties["color"];
  pipeOrigin: PipeOrigin;
}

export interface IconContainerProps {
  icon: React.ReactNode;
  accent: CSSProperties["color"];
}

export interface IconContainerDivProps {
  background: CSSProperties["background"];
  accent: CSSProperties["color"];
  circleCoords: CartesianCoords;
  isHover: boolean;
}

export interface ContentContainerProps {
  accent: CSSProperties["color"];
  title: string;
  description: string;
}

export interface ContentContainerDivProps {
  background: CSSProperties["background"];
  accent: CSSProperties["color"];
  isHover: boolean;
  circleCoords: CartesianCoords;
}

export interface ResumeItemContainerProps {
  pipeOrigin: PipeOrigin;
}

export interface PipeHeadSVGWrapperProps {
  pipeOrigin: PipeOrigin;
}

export interface BloomBackgroundProps {
  accent: CSSProperties["color"];
}

export interface BloomBackgroundContainerProps {
  accent: CSSProperties["color"];
}
