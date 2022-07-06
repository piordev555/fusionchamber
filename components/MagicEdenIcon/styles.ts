import styled from "styled-components";
import { MagicEdenIconSVGProps } from "./types";

export const MagicEdenIconSVG = styled.svg<MagicEdenIconSVGProps>`
  > * {
    fill: ${(props) => props.fill};
    stroke: ${(props) => props.stroke};
  }
`;
