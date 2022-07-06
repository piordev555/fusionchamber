import React, { useEffect, useState, useRef } from "react";
import { NextPage } from "next";

import Slider, { CustomArrowProps, Settings, ResponsiveObject } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 


import ApeItem from "./ApeItem";
import WalletApeItem from "./WalletApeItem";
import { getRandomApeIndex } from '../../utils'
import { APE_DATA, SingleApeData } from '../../constants/cyberapeage-data'
import { WALLECT_APES_LIST } from "./data"; 
import ArrowDown from "./Arrows/ArrowDown";
import ArrowLeft from "./Arrows/ArrowLeft";
import EmptyApe from './EmptyApe'
import {
    StakedHeader,
    LockdownApeContainer,
    LockdownApeWrapper,
    WalletLockdownApeContainer,
    NoApesFoundContainer,
    AllLockdownContainer,
} from './styles';
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { TokenData } from "../../types";
import getWalletNfts from "../CyberApeSearch/getWalletNfts";

const StakedConnected: NextPage = () => {
    const [stakedApes, setStatedApes] = useState<SingleApeData[]>([]);
    const [nothing, setNothing] = useState<boolean>(false);
    const [isAllLockdown, setIsAllLockdown] = useState<boolean>(false);
    const { publicKey, connected } = useWallet();
    const [isLoadingWalletNFTs, setIsLoadingWalletNFTs] = useState<boolean>(false);
    const [walletNFTs, setWalletNFTs] = useState<TokenData[] | null>(null);

    useEffect(() => {
        const mockData: SingleApeData[] = [];
        for (let i:number = 0; i < 10; i ++) {
            const randomApeIndex = getRandomApeIndex();
            const randomApe: SingleApeData = APE_DATA[randomApeIndex];
            mockData.push(randomApe);
        }
        setStatedApes(mockData);
    }, []);

    const getWallNFTList = async (publicKey: PublicKey) => {
      if (isLoadingWalletNFTs) return;
      
      setIsLoadingWalletNFTs(true);

      const curWalletNFTs: TokenData[] | null = await getWalletNfts(publicKey);

      if (curWalletNFTs) {
        setWalletNFTs(curWalletNFTs);
      }

      setIsLoadingWalletNFTs(false);
    }

    useEffect(() => {
      if (!connected || !publicKey) return;

      console.log('wallect connected');

      getWallNFTList(publicKey);
    }, [publicKey, connected])

    const SlickArrowLeft = ({...props }:CustomArrowProps) => (
        <button
          {...props}
          className="slick-prev slick-arrow"
          aria-hidden="true"
          type="button"
        >
          <ArrowLeft />
        </button>
    );
      
    const SlickArrowRight = ({...props }:CustomArrowProps) => (
        <button
          {...props}
          className="slick-next slick-arrow"
          aria-hidden="true"
          type="button"
        >
          <ArrowLeft />
        </button>
    );

    const AppendDots = (dots: React.ReactNode) => (
      <div className="slick-dots">
        <ul>
          {dots}
        </ul>
      </div>
    );
    
    const CustomPaging = (index: number) => (
        <div></div>
    )

    const responsives: ResponsiveObject[] = [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

    const slickSetting:Settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        appendDots: AppendDots,
        initialSlide: 0,
        responsive: responsives,
        customPaging: CustomPaging
    };

    return (
        <>
            {!isAllLockdown &&
              <StakedHeader>
                <p>lockdown a cyber ape to mine $cyber</p>
                <p>click here to choose one or multiple cyber apes to stake</p>
              </StakedHeader>
            }
            
            <LockdownApeContainer 
              customStyles={{
                padding: isAllLockdown ?  "0" : "30px",
                background: 'url(./dotBg.png) no-repeat',
                backgroundSize: `100% ${isAllLockdown ? '200px' : '395px'} `,
                minHeight: `${isAllLockdown ? '200px' : '395px'}`,
              }}
            >
              {
                  !isAllLockdown ?
                    <Slider {...slickSetting}>
                    {(!!!isLoadingWalletNFTs && walletNFTs) 
                      && walletNFTs.map((item: TokenData, index) => (
                      <ApeItem
                          key={index}
                          index={item.index}
                          token={item.token}
                          rank={item.rank}
                          traits={item.traits} />
                    ))}
                    </Slider>
                  :
                    <AllLockdownContainer>
                      <p className="title">all cyber apes underlockdown</p>
                      <p className="description">$cyber mining initiated...</p>
                      <div className="shadow-ape">
                        <EmptyApe />
                      </div>
                      
                    </AllLockdownContainer>
              }
            </LockdownApeContainer>

            {<WalletLockdownApeContainer>
              <div className="section-caption">
                  <p>your wallet&apos;s lockdown</p>
                  <ArrowDown />
              </div>
              <div className="staked-ape-container">
                {nothing ? 
                  <NoApesFoundContainer>
                    oops you have nothing staked...
                  </NoApesFoundContainer>
                :
                  WALLECT_APES_LIST.map((ApeData, index) => (
                    <WalletApeItem
                      key={index}
                      traits={ApeData.traits}
                      timeInLockdown={ApeData.timeInLockdown}
                      totalDays={ApeData.totalDays}
                      cyberProgress={ApeData.cyberProgress}
                      rewardedSecond={ApeData.rewardedSecond}
                      totalSecond={ApeData.totalSecond}
                    />
                  ))
                }
              </div>
            </WalletLockdownApeContainer>}
        </>
    )
}



export default StakedConnected;