import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../../constants";

export const GlobalFooterContainer = styled.section`
  width: 100%;
`;
export const ComingSoonTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: normal;
  text-transform: uppercase;

  margin: 15rem 0;
`;

export const CyberApeRendererWrapper = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 600px) {
    position: relative;
  
    top: 0;
    bottom: 0;
  }
`;

export const Twitter = styled.a`
  font-weight: normal;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    transition: all 0.05s ease-in-out;
    color: #1da1f2;
  }
`;

export const Discord = styled.a`
  font-weight: normal;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    transition: all 0.05s ease-in-out;
    color: #5865f2;
  }
`;

export const LinksRowContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10rem;
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-size: 1.75rem;
    line-height: 1em;
    font-weight: normal;

    margin: 0 0 1rem 0;
  }

  > a {
    line-height: 1em;
    opacity: 0.35;
    font-weight: normal;
    font-size: 1.12rem;

    transition: all 0.05s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

export const SocialsRow = styled.div`
  display: flex;

  flex-direction: column;
  gap: 0.5rem;
`;
