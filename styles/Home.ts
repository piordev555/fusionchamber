import { motion } from "framer-motion";
import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../constants";

export const HomeContainer = styled.div`
  width: 100%;
  .bttpai button {
    border: none !important;
  }

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  @media screen and (max-width: 600px) {
    width: 200%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
  }
`;

export const NotFoundContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const ResumeItemSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: ${PAGE_MAX_WIDTH};

  margin: 8rem auto;

  gap: 7rem;
`;

export const TestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: ${PAGE_MAX_WIDTH};

  margin: 0 auto 8rem auto;

  gap: 7rem;
`;

export const ResumeItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export const LandingHeroButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const LandingHeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: ${PAGE_MAX_WIDTH};
  margin: 0 auto;
`;

export const LandingHeroUpperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin: 10rem 0;
`;

export const RoadmapSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${PAGE_MAX_WIDTH};

  margin: 0 auto 15rem auto;

  gap: 12.5rem;
`;

export const PlayToEarnCTA = styled.section`
  background: url("/thesandbox-map-aroll.gif") center center no-repeat;
  background-size: cover;

  position: relative;

  margin: 0 auto 15rem auto;

  width: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }

  main {
    display: flex;
    flex-direction: column;
    max-width: ${PAGE_MAX_WIDTH};

    position: relative;
    z-index: 3;

    padding: 10rem 0;

    margin: 0 auto;

    gap: 3rem;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }
`;

export const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: ${PAGE_MAX_WIDTH};
  margin: 0 auto 15rem auto;
  gap: 7rem;
`;

export const TeamCardsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 4rem;
`;
