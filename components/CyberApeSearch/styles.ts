import Color from "color";
import styled from "styled-components";
import { CyberApeSearchWalletApeButtonProps, RaritySpanElementProps } from "./types";

export const CyberApeSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  z-index: 500;

  font-family: "VT323", monospace;
`;

export const CyberApeSearchWarningTitle = styled.h1`
  text-transform: uppercase;
  font-weight: normal;

  margin: 10rem 0;
`;

export const CyberSearchInputsContainer = styled.div`
  width: 100%;

  position: sticky;
  top: 0;
  z-index: 501;
`;

export const CyberApeSearchInput = styled.input`
  font-family: "VT323", monospace;

  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.17);
  font-size: 1.4rem;
  color: white;
  text-transform: uppercase;

  background: #010101;

  &:focus,
  &:active,
  &:focus-within,
  &:focus-visible {
    outline: 1px solid white;
  }
`;

export const CyberApeSearchWalletApes = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const CyberApeSearchWalletApesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  margin: 2rem 0;

  header {
    h2 {
      text-transform: uppercase;
      font-weight: normal;
      font-size: 1.25rem;
      color: white;
      opacity: 0.35;
    }
  }

  main {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.25rem;

    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export const CyberApeSearchWalletApeButton = styled.button<CyberApeSearchWalletApeButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem 0 0;

  transition: all 0.075s ease-in-out;

  border: 1px solid rgba(255, 255, 255, 0.07);
  background: ${({ isSelectedApe }) => (isSelectedApe ? "white" : "rgba(255, 255 ,255 ,0.05)")};

  font-weight: normal;
  font-family: "VT323", monospace;

  margin: 0 1rem 0 0;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.75);
  }

  span {
    font-size: 1.4rem;
    color: ${({ isSelectedApe }) => (isSelectedApe ? "black" : "white")};
  }
`;

export const CyberApeSearchWalletApeButtonSkeleton = styled.div`
  content: "";

  width: 90px;
  height: 40px;

  position: relative;

  margin: 0 1rem 0 0;

  border: 1px solid rgba(255, 255, 255, 0.07);

  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.025) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.025) 75%
  );
  background-size: 400% 400%;
  transition: all 0.25s ease-in-out;
  object-fit: contain;
  object-position: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 100%;
    z-index: 1;

    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.025) 25%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.025) 75%
    );
    background-size: 400% 400%;
    transition: all 0.25s ease-in-out;
    object-fit: contain;
    object-position: center;

    animation: ape-button-skeleton-shimmer 1s linear infinite;
  }

  animation: ape-button-skeleton-shimmer 1s linear infinite;

  @keyframes ape-button-skeleton-shimmer {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 135% 0%;
    }
  }
`;

export const CyberApeSearchResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  margin: 2rem 0;
`;
export const CyberApeSearchResultRenderer = styled.div`
  width: 40%;
`;

export const CyberApeSearchResultContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;
export const CyberApeSearchResultHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 4rem;
`;
export const CyberApeSearchResultHeaderIndex = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 5rem;
    line-height: 5rem;
    font-weight: normal;
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    h2 {
      opacity: 0.5;
      color: white;
      font-weight: normal;
      text-transform: uppercase;
      font-size: 1.25rem;
    }

    span {
      padding: 0.25rem;
      font-size: 0.85rem;
      text-transform: uppercase;
      background: #0047ff;
      color: white;
    }
  }
`;

export const RaritySpanElement = styled.span<RaritySpanElementProps>`
  padding: 0.25rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  background: ${({ color }) => new Color(color).alpha(0.2).string()};
  color: ${({ color }) => color};
`;

export const CyberApeSearchResultHeaderRarity = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 5rem;
    line-height: 5rem;
    font-weight: normal;
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    h2 {
      opacity: 0.5;
      color: white;
      font-weight: normal;
      text-transform: uppercase;
      font-size: 1.25rem;
    }
  }
`;

export const CyberApeSearchResultTraitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  gap: 0.75rem 1.75rem;

  margin: 2rem 0;
`;
export const CyberApeSearchResultTrait = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CyberApeSearchResultTraitName = styled.h2`
  opacity: 0.5;
  color: white;
  font-weight: normal;
  text-transform: uppercase;

  font-size: 1.25rem;
`;

export const CyberApeSearchResultTraitValue = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  text-transform: uppercase;
  font-weight: normal;
  line-height: 2rem;
`;

export const CyberApeSearchResultControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  flex-wrap;
`;
