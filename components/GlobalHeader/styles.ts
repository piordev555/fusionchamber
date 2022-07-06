import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../../constants";
import { IContainer, SocialsAnchorInterface } from "./types";

export const GlobalHeaderContainer = styled.header<IContainer>`
  width: 100%;
  height: ${(props) => (props.hasScrolled ? "80px" : "150px")};

  position: fixed;
  top: 0;
  z-index: 200;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(7.5px);

  transition: 0.2s ease-in-out;

  @media (max-width: 1280px) {
    padding: 0rem 2rem;
  }
`;

export const GlobalHeaderContentWrapper = styled.div`
  width: 100%;
  max-width: ${PAGE_MAX_WIDTH};
  margin: 0 auto;
  .bttpai button {

    border: none !important;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
 
`;

export const LeftArea = styled.section``;

export const Logo = styled.a`
  position: relative;

  font-size: 1.5rem;
`;

export const LogoFlag = styled.sup`
  font-size: 0.9rem;
  font-weight: normal;

  position: relative;
  z-index: 3;
`;

export const RightArea = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  // TODO: Port solana lab's wallet multi button code to <SignatureButton />

  * {
    font-family: "VT323", monospace !important;
    font-weight: normal !important;
    text-transform: uppercase !important;
    border-radius: 0 !important;
  }

  i {
    display: none !important;
  }

  button {
    background: none !important;
    border: 2px solid rgba(255, 255, 255, 0.35) !important;
    padding: 1rem 2rem !important;

    text-transform: uppercase !important;
    font-size: 1.2rem !important;
    line-height: 1em !important;
    font-weight: normal !important;

    transition: all 0.05s ease-in-out;

    &:hover {
      background: white !important;
      border: 1px solid white;
      color: black !important;
    }
  }
`;

export const MenuItem = styled.a`
  color: white;
  position: relative;
  .bttpai button {

    border: none !important;
  }
  user-select: none;

  font-size: 1.2rem;
  text-transform: uppercase;

  padding: 0.5rem 0.75rem;

  &:hover {
    &:after {
      content: "";
      position: absolute;
      z-index: 1;

      width: 0px;
      height: 0px;

      top: 120%;
      left: 50%;

      transform: translate(-50%, 0);

      background: rgba(255, 255, 255, 0.25);

      border-radius: 99vw;

      animation: menu-item-expand 0.15s forwards ease-out;

      @keyframes menu-item-expand {
        from {
          width: 0px;
          height: 0px;
        }
        to {
          width: 100%;
          height: 2px;
        }
      }
    }
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialsAnchor = styled.a<SocialsAnchorInterface>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  transition: all 0.075s ease-in-out;

  svg {
    path {
      transition: all 0.075s ease-in-out;
      fill: white;
    }
  }

  &:hover {
    svg {
      path {
        fill: ${(props) => props.hoverColor};
      }
    }
  }
`;

export const MobileMenuContainer = styled.div`
  h6 {
    text-align: right;
  }
`;

export const ComingSoonTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: normal;
  text-transform: uppercase;

  margin: 15rem 0;
`;

export const ImageWrapper = styled.div`
  width: 75%;
  height: auto;

  display: block;
  margin: 0 auto;

  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.3) 35%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.3) 65%
  );
  animation: image-wrapper-shimmer 1s linear infinite;

  @keyframes image-wrapper-shimmer {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 135% 0%;
    }
  }
`;

export const HubComingSoonContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5rem;

  h1 {
    font-weight: normal;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;

    position: relative;
    z-index: 1;

    max-width: 75%;

    &:after {
      content: "COMING SOON";
      font-size: 1.1rem;
      position: absolute;
      bottom: calc(100% + 0.5rem);
      padding: 0.15rem 0.3rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      color: rgba(255, 255, 255, 0.9);
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const TokenBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin: 0 1.5rem 0 1.25rem;

  span {
    font-size: 1.35rem;
    line-height: 1em;

    position: relative;
    z-index: 1;
    text-align: right;
  }

  span:nth-child(1) {
    &:after {
      content: "";
      position: absolute;
      z-index: 2;
      top: 50%;
      left: calc(100% + 0.5rem);
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 99vw;
      background: white;
    }
  }
  .eHXUiO button {
  
    border: none !important;
   
}

.wallet-adapter-button wallet-adapter-button-trigger{

  border: none !important;

  }

  span:nth-child(2) {
    &:after {
      content: "";
      position: absolute;
      z-index: 2;
      top: 50%;
      left: calc(100% + 0.5rem);
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 99vw;
      background: yellow;
    }
  }
`;
