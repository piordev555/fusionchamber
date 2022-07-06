import { CSSObject, CSSProperties } from "styled-components";
import { CartesianCoords } from "../../types";

export interface BloomingContainerProps {
  children: React.ReactNode;
  accent: CSSProperties["color"];
  customStyles?: CSSObject;
}

export interface BloomingContainerDivProps {
  background: CSSProperties["background"];
  accent: CSSProperties["color"];
  circleCoords: CartesianCoords;
  customStyles?: CSSObject;
}
