import styled, { css } from "styled-components";
import { CyberApeTraitContainerProps } from "./types";

export const CyberApeRendererContainer = styled.div<CyberApeTraitContainerProps>`
  width: ${(props) => (props.size ? props.size : "100%")};
  height: ${(props) => (props.size ? props.size : "auto")};
  position: relative;

  ${({ isLookingRight }) =>
    isLookingRight &&
    css`
      transform: scaleX(-100%);
    `}
`;

export const CyberApeTrait = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;

  /* :nth-child(1) {
    position: initial;
  } */

  svg {
    width: 100%;
    height: auto;
  }
`;
