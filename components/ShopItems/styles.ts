import styled, { css } from "styled-components";
import { ShopItemBuyButtonProps, ShopItemControlsProps } from "./types";

export const ShopItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ShopItemImageContainer = styled.div`
  background: black;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;

  padding: 1.5rem;

  svg {
    height: 125px;
    width: auto;
  }
`;

export const ShopItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: normal;
    font-size: 1.75rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.1rem;
    font-weight: normal;
    text-transform: uppercase;
    opacity: 0.35;
  }
`;

export const ShopItemControls = styled.div<ShopItemControlsProps>`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  width: 100%;

  gap: 0.5rem;

  > span {
    white-space: nowrap;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: "none";
    text-align: center;
    padding: 1rem 2rem;
    font-size: 1.75rem;
  }
`;

export const ShopItemBuyButton = styled.button<ShopItemBuyButtonProps>`
  width: 100%;
  white-space: nowrap;

  border: 1px solid rgba(255, 255, 255, 0);
  background: rgba(255, 255, 255, 0.05);

  transition: all 0.075s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:active {
    transform-origin: center;
    transform: scale(0.95);
  }

  h1 {
    font-family: "VT323", monospace;
    font-weight: normal;
    font-size: 1.3rem;
    color: white;
    line-height: 1em;

    text-transform: uppercase;
  }

  span {
    white-space: nowrap;
    font-family: "VT323", monospace;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1.2rem;
    opacity: 0.5;
    line-height: 1em;
    color: white;

    padding: 0;

    border: none;
  }

  &:hover {
    border: 1px solid white;
    background: white;
    * {
      color: black;
    }
  }

  ${({ isBuying }) => {
    if (isBuying)
      return css`
        user-select: none;
        pointer-events: none;

        cursor: not-allowed;

        border: 2px solid rgba(255, 255, 255, 0.15);

        background: linear-gradient(
          to left,
          rgba(255, 255, 255, 0.05) 25%,
          rgba(255, 255, 255, 0.125) 50%,
          rgba(255, 255, 255, 0.05) 75%
        );
        background-size: 400% 400%;
        transition: all 0.25s ease-in-out;
        object-fit: contain;
        object-position: center;

        animation: buy-button-shimmer 1s linear infinite;

        @keyframes buy-button-shimmer {
          from {
            background-position: 0% 0%;
          }
          to {
            background-position: 135% 0%;
          }
        }
      `;
  }}
`;

export const BoostIconSVG = styled.svg``;
export const BeakersIconSVG = styled.svg``;
export const WLIconSVG = styled.svg``;
export const UpgradeIconSVG = styled.svg``;
