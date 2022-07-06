import styled, { css, CSSProperties } from "styled-components";
import Color from "color";
import {
  BloomBackgroundContainerProps,
  ContentContainerDivProps,
  IconContainerDivProps,
  IconContainerProps,
  PipeHeadSVGWrapperProps,
  ResumeItemContainerProps,
} from "./types";

export const ResumeItemContainer = styled.div<ResumeItemContainerProps>`
  position: relative;

  display: flex;
  flex-direction: ${(props) => (props.pipeOrigin === "right" ? "row" : "row-reverse")};
  align-items: center;

  overflow: visible;

  @media (max-width: 1280px) {
    padding: 0 2rem;
  }
`;

export const PipeHeadSVGWrapper = styled.div<PipeHeadSVGWrapperProps>`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  position: absolute;
  z-index: 1;
  top: 50%;
  transform: ${(props) =>
    props.pipeOrigin === "right" ? "translateY(-50%)" : "translateY(-50%) scaleX(-1)"};

  ${(props) => {
    if (props.pipeOrigin === "left") {
      return css`
        right: 100%;
      `;
    } else {
      return css`
        left: 100%;
      `;
    }
  }}
`;

export const PipeHeadBodySVG = styled.svg`
  width: 100vw;
`;
