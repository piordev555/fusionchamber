import Image from "next/image";
import { NextPage } from "next/types";
import { HubComingSoonContainer, ImageWrapper } from "./styles";

const HubComingSoon: NextPage = () => {
  return (
    <HubComingSoonContainer>
      <ImageWrapper>
        <Image layout="responsive" src="/troopshub-proto.jpg" width="1918px" height="1039px" />
      </ImageWrapper>
      <h1>
        Troops Hub is the bridge for Cyber Lockdown, Astral Beakers and relevant project statistics
        like the current leaderboard for the running event.
      </h1>
    </HubComingSoonContainer>
  );
};
export default HubComingSoon;
