import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../../constants";

export const SuperModalContainerWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 205;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: default;

  background: rgba(0, 0, 0, 1);
  backdrop-filter: blur(2.5px);

  animation: supermodal-container-wrapper-fade-in 100ms forwards ease-in;

  @keyframes supermodal-container-wrapper-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const INITIAL_BACKGROUND = "rgba(0, 0, 0, 1)";
const LIT_BACKGROUND = "linear-gradient(180deg, rgba(15, 15, 15, 1) 0%, rgba(0, 0, 0, 1) 100%)";

export const SuperModalContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;

  width: 100%;
  max-width: 80vw;
  height: 80vh;
  max-height: 80vh;

  background: ${INITIAL_BACKGROUND};
  backdrop-filter: blur(50px);

  animation: supermodal-container-pop-in 400ms forwards ease-in-out;

  @keyframes supermodal-container-pop-in {
    from {
      scale: 0;
      opacity: 0;
      transform: scale(0);
    }
    30% {
      scale: 1;
      opacity: 1;
      transform: scale(1);
    }
    55% {
      background: ${INITIAL_BACKGROUND};
    }
    65% {
      background: ${LIT_BACKGROUND};
    }
    85% {
      background: ${INITIAL_BACKGROUND};
    }
    to {
      background: ${LIT_BACKGROUND};
    }
  }

  @media (min-width: ${PAGE_MAX_WIDTH}) {
    max-width: 1000px;
  }
`;

export const SuperModalHeader = styled.header`
  width: 100%;
  position: relative;

  padding: 1rem;

  display: flex;
  justify-content: flex-end;

  button {
    background: none;
    border: none;
    padding: 1rem;
  }
`;

export const SuperModalMain = styled.main`
  overflow: auto;

  padding: 0 1rem 1rem 1rem;
`;

export const SuperModalHeaderFloatingTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  cursor: text;

  text-transform: uppercase;
  font-weight: normal;
  font-size: 2rem;

  color: #fff;
  opacity: 0;

  animation: supermodal-header-title-flicker 400ms forwards ease-in-out;

  @keyframes supermodal-header-title-flicker {
    55% {
      opacity: 0;
    }
    65% {
      opacity: 1;
    }
    85% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const FlickeringPath = styled.path`
  fill: #141414;

  animation: supermodal-flickering-path-anim 400ms forwards ease-in-out;

  @keyframes supermodal-flickering-path-anim {
    55% {
      fill: #141414;
    }
    65% {
      fill: #fff;
    }
    85% {
      fill: #141414;
    }
    to {
      fill: #fff;
    }
  }
`;

export const SuperModalCloseButton = styled.button`
  path {
    transition: all 0.075s ease-in-out;
  }

  &:hover {
    path {
      fill: #fff;
    }
  }
`;

export const CrownDecorSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
  z-index: 2;
`;

export const TopEnergyPipeSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  z-index: 1;

  width: 99.5%;
`;

export const BottomEnergyPipeSVG = styled.svg`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  z-index: 1;

  > path {
    fill: #141414;
  }

  width: 99.5%;
`;

export const TopLeftEnergyPipeSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  transform: translate(-50%, -50%);
`;

export const TopRightEnergyPipeSVG = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  transform: translate(50%, -50%);
`;

export const BottomRightEnergyPipeSVG = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;

  transform: translate(50%, 50%);
`;

export const BottomLeftEnergyPipeSVG = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;

  transform: translate(-50%, 50%);
`;

export const LeftEnergyPipeSVG = styled.svg`
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 2;

  transform: translate(-100%, -50%);

  > path {
    fill: #141414;
  }

  height: 99.5%;
`;

export const RightEnergyPipeSVG = styled.svg`
  position: absolute;
  right: 0;
  top: 50%;
  z-index: 2;

  > path {
    fill: #141414;
  }

  transform: translate(100%, -50%);

  height: 99.5%;
`;

export const CloseIconSVG = styled.svg``;
