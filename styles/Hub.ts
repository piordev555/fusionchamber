import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../constants";

export const HubContainer = styled.div`
  width: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
`;

export const WelcomeHeader = styled.div`
  width: 100%;
  padding: 1.5rem 0;

  background: linear-gradient(to right, #5fada9 25%, #b071ce 50%, #5fada9 75%);
  background-size: 400% 400%;
  transition: all 0.25s ease-in-out;
  object-fit: contain;
  object-position: center;

  animation: welcome-header-shimmer 2.5s linear infinite;

  @keyframes welcome-header-shimmer {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 135% 0%;
    }
  }

  > div {
    width: 100%;
    max-width: ${PAGE_MAX_WIDTH};

    margin: 0 auto;
  }

  h1 {
    font-weight: normal;
    text-transform: uppercase;
    font-size: 2.75rem;

    color: black;
  }

  p {
    font-size: 1.25rem;
    text-transform: uppercase;
    line-height: 1em;
    color: black;
    opacity: 0.55;
  }
`;
