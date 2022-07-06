import { motion } from "framer-motion";
import styled from "styled-components";

export const TestimonialsItemsContainer = styled(motion.div)`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TwitterCardsRow = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const TwitterCardContainer = styled(motion.div)`
  pointer-events: none;
  width: min-content;

  font-size: 1.1rem;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: min-width;

    > div {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      svg {
        path {
          fill: #1da1f2;
        }
      }
    }

    img {
      width: 24px;
      height: 24px;

      border-radius: 99vw;
    }

    a {
      pointer-events: all;

      height: 100%;

      color: #;
    }
  }

  main {
    p {
      max-width: 300px;
      font-weight: normal;
    }
  }
`;
