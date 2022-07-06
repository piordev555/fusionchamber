import styled, { css } from "styled-components";
import { ANIM_DURATION, REFRESH_COUNTDOWN_DURATION } from "./constants";
import {
  MovingBackgroundContainerProps,
  AccentSparkGroupProps,
  RefreshButtonContentWrapperProps,
} from "./types";

export const RefreshButtonContainer = styled.button`
  width: max-content;

  background: none;
  color: white;
  font-family: "VT323", monospace;
  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem 2.5rem;

  position: relative;

  text-transform: uppercase;
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: normal;

  cursor: pointer;
`;

export const RefreshButtonContentPlaceholder = styled.div`
  opacity: 0;
  user-events: none;
  pointer-events: none;
`;

export const RefreshButtonContentWrapper = styled.div<RefreshButtonContentWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  pointer-events: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  ${({ isHover }) => {
    if (isHover) {
      return css`
        * {
          animation: fill-to-white 0.1s ${ANIM_DURATION}s ease-in-out forwards;

          @keyframes fill-to-white {
            to {
              fill: #fff;
              color: #fff;
            }
          }
        }
      `;
    }
  }}
`;

export const BaseBackgroundSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;

  path {
    width: 100%;
  }
`;

export const ContrastBaseBackgroundSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;

  path {
    width: 100%;
  }
`;

export const CountdownBackgroundSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;

  path {
    width: 100%;
    fill: white;
  }

  opacity: 0.1;

  animation: countdown-bg-anim ${REFRESH_COUNTDOWN_DURATION} ease-in-out forwards;

  @keyframes countdown-bg-anim {
    from {
      -webkit-clip-path: inset(0 0 0 0);
      clip-path: inset(0 0 0 0);
    }
    to {
      -webkit-clip-path: inset(0 100% 0 0);
      clip-path: inset(0 100% 0 0);
    }
  }
`;

export const ContrastBaseFilledBackgroundSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;

  path {
    width: 100%;
  }

  opacity: 0;

  transition: none;

  animation: constrast-base-filled-bg-anim 0.05s ${ANIM_DURATION}s linear forwards;

  @keyframes constrast-base-filled-bg-anim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MovingBackgroundContainer = styled.div<MovingBackgroundContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;

  transition: all 0.2s ease-in-out;

  clip-path: polygon(0 65%, 18% 100%, 100% 100%, 100% 40%, 80.5% 0, 0 0);

  overflow: hidden;

  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    height: 50%;

    background: rgba(70, 70, 70, 0.6);

    transition: all 0.1s ease-in;
  }

  div:nth-child(1) {
    transform: ${(props) => (props.isHover ? "translateY(0)" : "translateY(-100%)")};
  }

  div:nth-child(2) {
    transform: ${(props) => (props.isHover ? "translateY(0)" : "translateY(100%)")};
  }
`;

export const SparksContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const TopFirstSpark = styled.svg`
  transform: translateY(-50%);
  width: 81.5%;
  opacity: 0;

  transition: none;

  animation: top-first-spark-anim 0.1s 0.125s linear forwards;

  @keyframes top-first-spark-anim {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const BottomFirstSpark = styled.svg`
  transform: translate(20%, 50%);
  width: 81.5%;
  opacity: 0;

  transition: none;

  animation: top-first-spark-anim 0.1s 0.125s linear forwards;

  @keyframes top-first-spark-anim {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const ColoredSparksContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const TopFirstColoredSpark = styled.svg`
  transform: translateY(-50%);
  width: 81.5%;
  opacity: 0;

  transition: none;

  animation: top-first-spark-anim 0.1s 0.225s linear forwards;

  @keyframes top-first-spark-anim {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const BottomFirstColoredSpark = styled.svg`
  transform: translate(21%, 50%);
  width: 81.5%;
  opacity: 0;

  transition: none;

  animation: top-first-spark-anim 0.1s 0.225s linear forwards;

  @keyframes top-first-spark-anim {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const AccentSparkGroup = styled.g<AccentSparkGroupProps>`
  > path {
    fill: ${(props) => props.accent};
  }
`;
