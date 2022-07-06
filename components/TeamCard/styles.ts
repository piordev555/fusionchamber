import { motion } from "framer-motion";
import styled from "styled-components";

export const TeamCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const TeamCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 0.15rem;
`;

export const TeamNameSpan = styled.span`
  text-transform: uppercase;
  font-weight: normal;
  font-size: 2.25rem;
  text-align: center;
`;

export const TeamRoleSpan = styled.span`
  margin: 0.5rem 0 0 0;

  text-transform: uppercase;
  font-weight: normal;

  line-height: 1em;

  max-width: 150px;
  text-align: center;

  opacity: 0.5;
`;

export const TeamExperienceSpan = styled.span`
  padding: 0.1rem 0.2rem;

  color: white;
  text-transform: uppercase;
  font-size: 1.05rem;

  text-align: center;

  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
`;
