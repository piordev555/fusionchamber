import DiscordIcon from "../DiscordIcon";
import TwitterIcon from "../TwitterIcon";
import { SocialsContainer, SocialsAnchor } from "./styles";

const Socials = () => {
  return (
    <SocialsContainer>
      <SocialsAnchor
        href="https://twitter.com/CyberApeAge"
        target="_blank"
        rel="noreferrer"
        hoverColor="#55ACEE"
      >
        <TwitterIcon />
      </SocialsAnchor>
      <SocialsAnchor
        href="https://discord.gg/invite/cCcvdG5WFy"
        target="_blank"
        rel="noreferrer"
        hoverColor="#5865F2"
      >
        <DiscordIcon />
      </SocialsAnchor>
    </SocialsContainer>
  );
};

export default Socials;
