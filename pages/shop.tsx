import React, { useContext, useEffect } from "react";
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import HeadMetadata from "../components/HeadMetadata";
import { ShopContainer, ShopItemsWrapper, WelcomeHeader } from "../styles/Shop";
import PageTopSpacer from "../components/PageTopSpacer";
import ShopItems from "../components/ShopItems";
import { SHOP_ITEMS } from "../data/shop";

const Home: NextPage<any> = ({ shopItems }) => {
  return (
    <>
      <HeadMetadata />
      <GlobalHeader />
      <PageTopSpacer />
      <ShopContainer>
        <WelcomeHeader>
          <div>
            <h1>WELCOME TO TROOP&apos;S BAZAR!</h1>
            <p>
              Cyber Apes come here to do their shopping. This bazar sells goods from Cyber Ape
              Age&apos;s ecosystem in change of $APE and $CYBER. Look around and buy/sell items as
              you please.
            </p>
          </div>
        </WelcomeHeader>
        <ShopItemsWrapper>
          <ShopItems shopItems={shopItems} />
        </ShopItemsWrapper>
      </ShopContainer>
   
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
