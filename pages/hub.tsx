import React, { useContext, useEffect } from "react";
import type { GetServerSidePropsContext, NextPage } from "next";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import HeadMetadata from "../components/HeadMetadata";
import PageTopSpacer from "../components/PageTopSpacer";
import { SHOP_ITEMS } from "../data/shop";
import SectionHeader from "../components/SectionHeader";
import SignatureButton from "../components/SignatureButton";
import { HubContainer, WelcomeHeader } from "../styles/Hub";
import Hub from "../components/Hub";

const Home: NextPage<any> = ({ shopItems }) => {
  return (
    <>
      <HeadMetadata />
      <GlobalHeader />
      <PageTopSpacer />
      <SectionHeader
        //@ts-ignore
        append={
          <div
            style={{ maxHeight: "3rem", marginLeft: "auto", marginTop: "1rem" }}
          >
            <SignatureButton onClick={() => {}} isContrast accent="#5865F2">
              HOW DOES STAKE WORK
            </SignatureButton>
          </div>
        }
        ltr={true}
        isBigTitle={true}
        title="CYBER LOCKDOWN..."
      />
      <div style={{ height: "2rem" }} />
      <HubContainer>
        <WelcomeHeader>
          <div>
            <p>TOTAL $cyber ACCUMULATED</p>
            <h1>123125.012</h1>
          </div>
        </WelcomeHeader>
        <Hub />
      </HubContainer>

      <GlobalFooter />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const shopItems = SHOP_ITEMS;

  return {
    props: { shopItems },
  };
}

export default Home;
