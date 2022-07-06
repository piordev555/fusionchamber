import { NextPage } from "next/types"
import React, { useContext } from "react"
import GlobalFooter from "../components/GlobalFooter"
import GlobalHeader from "../components/GlobalHeader"
import SignatureButton from '../components/SignatureButton'
import StakedNotConnect from "../components/StakedNotConnect"
import StakedConnected from "../components/StakedConnected"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import WalletTokensContext from "../contexts/WalletTokens"
import Image from "next/image"
import { HomeContainer, NotFoundContainer } from "../styles/Home"
import { MainContainer, ApeContainer } from '../styles/Stake'
import CyberApeRenderer from "../components/CyberApeRenderer"

const CyberLockdownPage: NextPage = () => {

  const { apeAmount, cyberAmount } = useContext(WalletTokensContext);
  const { connected, publicKey } = useWallet();

  return (
    <HomeContainer>
      <GlobalHeader />
      <MainContainer>
        <div className="lockdown-header">
          <div className="title">
            <span>cyber lockdown...</span>
          </div>
          <SignatureButton
            onClick={() => {}}
            isContrast
            accent="#5865F2"
          >
            WHAT IS LOCKDOWN?
          </SignatureButton>
        </div>
        <div className="statistics-header">
          <div className="container">
            <div className="data-part">
              <div className="data-item">
                <p>total $cyber accumulated</p>
                <p>123125.012</p>
              </div>
              <div className="data-item">
                <p>total time in lockdown</p>
                <p>12321/12:23:13</p>
              </div>
              <div className="data-item">
                <p>apes in lockdown</p>
                <p>{cyberAmount}</p>
              </div>
            </div>
            <div className="stake-header-img">
              <CyberApeRenderer 
                  isLookingRight={false}
                  size="200px"
                  traits={{
                    ape: "Mutant",
                    head: "Military Hat",
                    eyes: "VR",
                    ears: "Nothing",
                    mouth: "Cigar",
                  }}
              />
            </div>
          </div>
          
        </div>
        <ApeContainer>
        {connected ? 
          <StakedConnected />
          :
          <StakedNotConnect />
        }
        </ApeContainer>
        
      </MainContainer>
      
      <GlobalFooter />
    </HomeContainer>
  );
};

export default CyberLockdownPage;
