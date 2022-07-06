import styled, { css } from "styled-components";
import { PAGE_MAX_WIDTH } from "../../constants";
import { Background } from "../../types/ape-traits";
import {
  DerivativeSectionBackgroundContainerProps,
  DerivativeSectionTextColumnProps,
} from "./types";
import { invertLevelFromBackground } from "./utils";

export const DerivativeSectionContainer = styled.section`
  position: relative;

  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;

  align-items: center;
  justify-content: center;
`;

export const DerivativeSectionContent = styled.div`
  position: relative;
  z-index: 5;

  margin: 0 auto;

  max-width: ${PAGE_MAX_WIDTH};
  display: flex;

  height: 100%;
`;

export const DerivativeSectionTextColumn = styled.div<DerivativeSectionTextColumnProps>`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
  justify-content: center;

  ${(props) =>
    props.currentBackground &&
    css`
      filter: invert(${invertLevelFromBackground(props.currentBackground)});
    `}

  h1 {
    font-size: 3.5rem;
    font-weight: normal;
  }

  p {
    font-size: 1.25rem;
    opacity: 0.35;
    font-weight: normal;
  }
`;

export const RerollIconSVG = styled.svg`
  path:nth-child(1) {
    animation: reroll-1 0.1s linear forwards;

    @keyframes reroll-1 {
      from {
        transform: translateX(0px);
      }

      50% {
        transform: translateX(3px);
      }

      to {
        transform: translateX(0px);
      }
    }
  }

  path:nth-child(2) {
    animation: reroll-2 0.1s linear forwards;

    @keyframes reroll-2 {
      from {
        transform: translateX(0px);
      }

      50% {
        transform: translateX(-3px);
      }
      to {
        transform: translateX(0px);
      }
    }
  }
`;

export const DerivativeSectionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DerivativeSectionApeColumn = styled.div`
  width: 50%;
  height: 100%;

  padding: 5rem 0 0 0;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const DerivativeSectionButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DerivativeSectionBackgroundContainer = styled.div<DerivativeSectionBackgroundContainerProps>`
  width: 100%;
  height: 100%;

  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  animation: derivative-background-fade-in 1s ease-in-out;

  background: ${({ backgroundValue }) => backgroundValue};

  @keyframes derivative-background-fade-in {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }

  > h1 {
    text-transform: uppercase;
    font-weight: normal;
  }
`;
