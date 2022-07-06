import { motion } from "framer-motion";
import styled from "styled-components";

export const HorizontalSliderContainer = styled(motion.div)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  overflow: hidden;

  position: relative;

  /* &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 25px;
    z-index: 1;

    pointer-events: none;

    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  } */
`;

export const HorizontalSliderInnerContainer = styled(motion.div)`
  width: 100%;

  cursor: grab;
`;

export const HorizontalSliderControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  span {
    opacity: 0.35;
  }
`;

export const HorizontalSliderControlsButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HorizontalSliderControlsButton = styled.button`
  border: none;
  background: none;

  padding: 0.75rem;

  svg {
    path {
      transition: all 0.075s ease-in-out;
      opacity: 0.35;
    }
  }

  &:nth-child(1) {
    transform: scaleX(-100%);
  }

  &:hover {
    svg {
      path {
        opacity: 1;
      }
    }
  }
`;
