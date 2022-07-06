import { NextPage } from "next";
import DiscordIcon from "../DiscordIcon";
import { Container, Title, SocialsWrapper, Twitter, Discord } from "./styles";
import TwitterIcon from "../TwitterIcon";

const CyberApeRenderer: NextPage = () => {
  return (
    <Container>
      <Title>July 2022</Title>
      <SocialsWrapper>
        <Twitter href="https://twitter.com/CyberApeAge" target="_blank" rel="noreferrer">
          <TwitterIcon />
          CYBERAPEAGE
        </Twitter>

        <Discord href="https://discord.gg/cCcvdG5WFy" target="_blank" rel="noreferrer">
          <DiscordIcon />
          discord
        </Discord>
      </SocialsWrapper>
    </Container>
  );
};

export default CyberApeRenderer;
