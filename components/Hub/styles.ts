import styled from "styled-components";
import { motion } from "framer-motion";

export const HubOuter = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width:100%;
`

export const HubInner = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height:360px;
  margin: 2rem auto 2rem auto;
  border: 2px dashed rgba(255, 255, 255, 0.28);
  display: flex;
  justify-content: center;
  border-radius:15px;
  align-items:center;
  background: url("./assets/hubplaceholder-bg.png");
  background-position:center;
  background-size: contain;
  background-repeat:no-repeat;
`

export const Title = styled.p`
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
`

export const Subtitle = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #404040;
`

export const ApesSliderContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: stretch;
  gap: 4rem;
`

export const ApeCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  width: 50px;
  background-color:red;
`
