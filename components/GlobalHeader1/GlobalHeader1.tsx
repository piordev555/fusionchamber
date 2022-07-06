import { NextPage } from "next";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import React, { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Socials from "./Socials";
import {
  GlobalHeaderContainer,
  LeftArea,
  Logo,
  RightArea,
  MenuItem,
  GlobalHeaderContentWrapper,
  LogoFlag,
  ComingSoonTitle,
  TokenBalanceWrapper,
} from "./styles";
import SignatureButton from "../SignatureButton";
import SuperModalContext from "../../contexts/SuperModal";
import CyberApeSearch from "../CyberApeSearch";
import MobileMenuContext from "../../contexts/MobileMenu";
import Link from "next/link";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import WalletTokensContext from "../../contexts/WalletTokens";

const GlobalHeader1: NextPage = () => {
  const { open } = useContext(SuperModalContext);
  const { openMobileMenu } = useContext(MobileMenuContext);
  const { apeAmount, cyberAmount } = useContext(WalletTokensContext);
  const { connected, publicKey } = useWallet();

  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  function openExplorer(): void {
    open("troop's explorer", <CyberApeSearch />);
  }



  useEffect(() => {
    const handleScroll = (event: any) => {
      const scrollTop = event.target.body.getBoundingClientRect().top;

      scrollTop !== 0 ? setHasScrolled(true) : setHasScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <GlobalHeaderContainer hasScrolled={hasScrolled}>
      <GlobalHeaderContentWrapper>
        <LeftArea>
          <Logo href="/">
            CYBERAPEAGE
          </Logo>
        </LeftArea>
        <RightArea>
          {isMobile ? (
            <SignatureButton onClick={openMobileMenu} accent="#111">
              MENU
            </SignatureButton>
          ) : (
            <>
              <MenuItem >Troop&apos;s Hub</MenuItem>
              <Link href={"/shop"}>
                <MenuItem>bazar</MenuItem>
              </Link>
              <MenuItem onClick={openExplorer}>explorer</MenuItem>
              {connected && publicKey && (
                <TokenBalanceWrapper>
                  <span>{apeAmount}</span>
                  <span>{cyberAmount}</span>
                </TokenBalanceWrapper>
              )}

              <Socials />
            </>
          )}
        </RightArea>
      </GlobalHeaderContentWrapper>
    </GlobalHeaderContainer>
  );
};

export default GlobalHeader1;
