import React, { useContext, useEffect } from "react";
import type { GetServerSidePropsContext, NextPage } from "next";
import GlobalHeader from "../components/GlobalHeader";
//@ts-ignore
import cookieCutter from "cookie-cutter";
import HeroTroop from "../components/HeroTroop";
import {
  HomeContainer,
  LandingHeroButtonsWrapper,
  LandingHeroSection,
  LandingHeroUpperContent,
  PlayToEarnCTA,
  ResumeItems,
  ResumeItemSection,
  RoadmapSection,
  TeamCardsWrapper,
  TeamSection,
} from "../styles/Home";
import ResumeItem from "../components/ResumeItem";
import SolanaIcon from "../components/ResumeItem/SolanaIcon";
import SectionHeader from "../components/SectionHeader";
import MagicEdenIcon from "../components/MagicEdenIcon";
import SignatureButton from "../components/SignatureButton";
import CyberApeSearch from "../components/CyberApeSearch";
import SuperModalContext from "../contexts/SuperModal";
import DerivativeSection from "../components/DerivativeSection";
import GlobalFAQ from "../components/GlobalFAQ";
import GlobalFooter from "../components/GlobalFooter";
import HorizontalSlider from "../components/HorizontalSlider";
import ApeIcon from "../components/ResumeItem/ApeIcon";
import KeyIcon from "../components/ResumeItem/KeyIcon";
import CommunityIcon from "../components/ResumeItem/CommunityIcon";
import Roadmap from "../components/Roadmap";
import DiscordIcon from "../components/DiscordIcon";
import TeamCard from "../components/TeamCard";
import HeadMetadata from "../components/HeadMetadata";
import { DerivativeSectionContextProvider } from "../contexts/DerivativeSection";

import HubComingSoon from "../components/GlobalHeader/HubComingSoon";
interface HomeProps {
  twitterData: any;
}

const Home: NextPage<HomeProps> = ({ twitterData }) => {
  const { open } = useContext(SuperModalContext);

  function travelToMarketplace() {
    window.open("https://magiceden.io/marketplace/cyber_ape_age", "_blank");
  }
  function openHub(): void {
    open("troop's hub", <HubComingSoon />);
  }
  function checkForApeData() {
    const COOKIE_SEARCH_KEY = "CYBERAPE_SEARCH_IDENTIFIER";
    const CYBERAPE_IDENTIFIER = cookieCutter.get(COOKIE_SEARCH_KEY);

    if (CYBERAPE_IDENTIFIER) {
      open(
        "troop's codex",
        <CyberApeSearch identifier={CYBERAPE_IDENTIFIER} />
      );
      cookieCutter.set(COOKIE_SEARCH_KEY, "", { expires: new Date(0) });
      return;
    }
  }

  useEffect(checkForApeData);

  return (
    <>
      <HeadMetadata />
      {/* <ComingSoon /> */}
      <GlobalHeader />
      <HomeContainer>
        <LandingHeroSection>
          <LandingHeroUpperContent>
            <SectionHeader
              isBigTitle
              title="JOIN the troop"
              description="Developing the future and staging the potential of Web3 gaming by building experiences in the metaverse. We aim to show the potential of Play-2-Earn mechanics on the low-gas fee Solana blockchain, through building highly detailed intricate realms with complex mechanics whilst rewarding Solana (SOL) through our scaling prize pool. Changing the views of investors into Web3 gaming."
            />
            <LandingHeroButtonsWrapper>
              <SignatureButton onClick={openHub} isContrast accent="#5865F2">
                troop&apos;s hub
              </SignatureButton>
              <SignatureButton onClick={travelToMarketplace} accent="#E42575">
                <MagicEdenIcon fill="#595959" />
                marketplace
              </SignatureButton>
            </LandingHeroButtonsWrapper>
          </LandingHeroUpperContent>
          <HeroTroop />
        </LandingHeroSection>

        <DerivativeSectionContextProvider>
          <DerivativeSection />
        </DerivativeSectionContextProvider>

        <ResumeItemSection>
          <SectionHeader
            title="why jump into cyber ape age?"
            description="Need alpha? Need good art? Want to enjoy web3 with a strong community while growing your portfolio? Whether you are hopping in for an investment or the joy of our community, we have something tailored for everyone."
          />
          <ResumeItems>
            <ResumeItem
              borderImageUrl="stair-border-green.svg"
              icon={<SolanaIcon fill="#ACE9BD" stroke="#ACE9BD" />}
              title="huge earnings for holders"
              accent="#ACE9BD"
              description="Owning a Cyber Ape grants you the access to the prize pool to earn SOL and $CYBER. To this day we’ve gotten x amount of sol. and x amount of ape.."
              pipeOrigin="right"
            />
            <ResumeItem
              borderImageUrl="stair-border-red.svg"
              icon={<ApeIcon fill="#FF9E9E" stroke="#FF8A8A" />}
              title="CYBER LOCKDOWN ⬩ ASTRAL BEAKERS"
              accent="#FF9E9E"
              description="Cyber Age metaverse is not an easy place to live in. Apes that want to be highly rewarded take shortcuts and end up in Cyber Lockdown. Juggle life behind bars and earn $CYBER.
              You should also know that a group of brave Apes once stumbled upon a lake in the astral realm and brought back a strange liquid, take a sip and see its effects on your Cyber Apes. take note it doesn't come cheap"
              pipeOrigin="left"
            />
            <ResumeItem
              borderImageUrl="stair-border-yellow.svg"
              icon={<KeyIcon fill="#FEFFDB" stroke="#FDFFB2" />}
              title="a key to the REAL metaverse"
              accent="#FDFFB2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim."
              pipeOrigin="right"
            />
            <ResumeItem
              borderImageUrl="stair-border-blue.svg"
              icon={<CommunityIcon fill="#92F2FF" stroke="#5DCFFF" />}
              title="hiGH-OCTANE MOTILE COMMUNITY"
              accent="#5DCFFF"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim."
              pipeOrigin="left"
            />
          </ResumeItems>
        </ResumeItemSection>

        <PlayToEarnCTA>
          <main>
            <SectionHeader
              title="play on thesandbox™ metaverse"
              description="Cyber Ape Age owns land on THESANBOX metaverse. Test your skills in fast paced competitive events to earn SOL. Check troop apos's hub for information about every week's event."
            />
            <div>
              <SignatureButton onClick={() => {}} isContrast accent="#5865F2">
                troop&apos;s hub
              </SignatureButton>
              <SignatureButton
                onClick={() => {
                  window.location.href = "https://discord.gg/cyberapeage";
                }}
                accent="#5865F2"
              >
                <DiscordIcon fill="rgba(255, 255, 255, 0.35)" />
                discord server
              </SignatureButton>
            </div>
          </main>
        </PlayToEarnCTA>

        <RoadmapSection>
          <SectionHeader title="what does the future behold?" />
          <Roadmap />
        </RoadmapSection>

        <TeamSection>
          <SectionHeader
            title="MEET THE TEAM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim."
          />
          <HorizontalSlider hasControls>
            <TeamCardsWrapper>
              <TeamCard
                experience={3}
                name="BR"
                role="Co-Founder, Project Lead, Creative Lead"
                traits={{
                  ape: "Brown",
                  head: "Crown",
                  ears: "Nothing",
                  mouth: "Nothing",
                  eyes: "Rainbow Visor",
                }}
              />
              <TeamCard
                experience={4}
                name="Ludic"
                role="Co-Founder, Game Designer/Voxel Artist"
                traits={{
                  ape: "Black",
                  head: "Pilot",
                  ears: "Nothing",
                  mouth: "Blunt",
                  eyes: "Nothing",
                }}
              />
              <TeamCard
                experience={2}
                name="Radical"
                role="Co-Founder, Pixel Art Artist, Game Designer/Voxel Artist"
                traits={{
                  ape: "Cyan",
                  head: "Nothing",
                  ears: "Neon Earring",
                  mouth: "Banana",
                  eyes: "Stoned",
                }}
              />
              <TeamCard
                experience={10}
                name="The Community"
                role="Aping into everying, spreading the word and playing our P2E events"
                traits={{
                  ape: "Blue",
                  head: "Crown",
                  ears: "Nothing",
                  mouth: "Nothing",
                  eyes: "Cyclowear",
                }}
              />
            </TeamCardsWrapper>
          </HorizontalSlider>
        </TeamSection>
      </HomeContainer>
      <GlobalFAQ />
      <GlobalFooter />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const ORIGIN = context.req.headers.host;

  const twitterData = await fetch(`http://${ORIGIN}/api/tweets`).then((res) =>
    res.ok ? res.json() : null
  );

  return {
    props: { twitterData },
  };
}

export default Home;
