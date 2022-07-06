import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { BloomingContainerDivProps } from "./types";

export const BloomingContainerDiv = styled.div.attrs<BloomingContainerDivProps>(
  (props) => ({
    style: {
      background: props.background,
    },
  })
)<BloomingContainerDivProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: "flex-start";
  gap: 0.75rem;

  height: 100%;

  border: 1px solid ${(props) => props.accent};

  > h1 {
    text-transform: uppercase;
    font-weight: normal;
    font-size: 2rem;
    line-height: 2rem;
    color: ${(props) => props.accent};

    pointer-events: none;
  }

  > p {
    pointer-events: none;
  }

  > svg {
    animation: floating-icon 2s linear infinite;
  }

  @keyframes floating-icon {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(0.15rem);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-0.15rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  ${({ customStyles }) =>
    customStyles &&
    css`
      ${customStyles}
    `}
`;
