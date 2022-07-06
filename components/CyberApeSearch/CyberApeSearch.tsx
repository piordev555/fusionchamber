import { NextPage } from "next/types";
import { useEffect, useState, useMemo, useRef } from "react";
import debounce from "lodash.debounce";
import CyberApeRenderer from "../CyberApeRenderer";
import {
  CyberApeSearchContainer,
  CyberApeSearchInput,
  CyberApeSearchResultContainer,
  CyberApeSearchResultContent,
  CyberApeSearchResultControls,
  CyberApeSearchResultHeader,
  CyberApeSearchResultHeaderIndex,
  CyberApeSearchResultHeaderRarity,
  CyberApeSearchResultRenderer,
  CyberApeSearchResultTrait,
  CyberApeSearchResultTraitName,
  CyberApeSearchResultTraitsContainer,
  CyberApeSearchResultTraitValue,
  CyberApeSearchWalletApeButton,
  CyberApeSearchWalletApeButtonSkeleton,
  CyberApeSearchWalletApesContainer,
  CyberApeSearchWarningTitle,
  CyberSearchInputsContainer,
} from "./styles";
import { ApeData, CyberApeSearchProps } from "./types";
import RaritySpan from "./RaritySpan";
import SignatureButton from "../SignatureButton";
import { useWallet } from "@solana/wallet-adapter-react";
import getWalletNfts from "./getWalletNfts";
import { PublicKey } from "@solana/web3.js";
import { TokenData } from "../../types";

const CyberApeSearch: NextPage<CyberApeSearchProps> = ({
  identifier = null,
}) => {
  const { publicKey, connected } = useWallet();

  const cyberApeSearchInputRef = useRef<HTMLInputElement>(null);

  const [apeData, setApeData] = useState<ApeData | null>(null);
  const [inputIdentifier, setInputIdentifier] = useState<string>(
    identifier ? identifier : ""
  );
  const [currentWalletNFTList, setCurrentWalletNFTList] = useState<
    TokenData[] | null
  >(null);
  const [isLoadingWalletNFTList, setIsLoadingWalletNFTList] =
    useState<boolean>(false);
  const [isLoadingResult, setIsLoadingResult] = useState<boolean>(false);
  const [errorFetchingNFT, setErrorFetchingNFT] = useState<boolean>(false);

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setInputIdentifier(event.target.value);
  }

  async function getCurrentWalletNFTList(publicKey: PublicKey) {
    if (isLoadingWalletNFTList) return;

    setIsLoadingWalletNFTList(true);

    const walletNFTList: TokenData[] | null = await getWalletNfts(publicKey);

    if (walletNFTList) {
      setCurrentWalletNFTList(walletNFTList);
    }

    setIsLoadingWalletNFTList(false);
  }

  useEffect(() => {
    if (!identifier) return;

    setIsLoadingResult(true);

    fetch(`/api/cyberapeage/${identifier}`)
      .then((res) => (res.status === 200 ? res.json() : null))
      .then((cyberApeData) => {
        if (cyberApeData) {
          setApeData(cyberApeData);
          setInputIdentifier(identifier);
          setIsLoadingResult(false);

          if (cyberApeSearchInputRef.current) {
            cyberApeSearchInputRef.current.value = identifier;
          }
        }
      })
      .catch((err) => {
        console.log("error fetching data for cyber ape", err);
        setApeData(null);
        setIsLoadingResult(false);
        setErrorFetchingNFT(true);
      });
  }, []);

  useEffect(() => {
    if ((!identifier && !inputIdentifier) || !cyberApeSearchInputRef.current)
      return;

    cyberApeSearchInputRef.current.value = inputIdentifier;

    setIsLoadingResult(true);

    fetch(`/api/cyberapeage/${inputIdentifier}`)
      .then((res) => (res.status === 200 ? res.json() : null))
      .then((cyberApeData) => {
        if (cyberApeData) {
          setApeData(cyberApeData);
          setIsLoadingResult(false);
          return;
        }
      })
      .catch((err) => {
        console.log("error fetching data for cyber ape", err);
        setApeData(null);
        setIsLoadingResult(false);
        setErrorFetchingNFT(true);
      });

    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [inputIdentifier]);

  useEffect(() => {
    if (!connected || !publicKey) return;

    getCurrentWalletNFTList(publicKey);
  }, [publicKey, connected]);

  return (
    <CyberApeSearchContainer>
      <CyberSearchInputsContainer>
        <CyberApeSearchInput
          ref={cyberApeSearchInputRef}
          onChange={debouncedChangeHandler}
          type="text"
          placeholder="SEARCH FOR A CYBER APE..."
        />
      </CyberSearchInputsContainer>
      {isLoadingWalletNFTList && (
        <CyberApeSearchWalletApesContainer>
          <header>
            <h2>Finding your Cyber Apes..</h2>
          </header>
          <main>
            <CyberApeSearchWalletApeButtonSkeleton />
            {new Array(5).fill(0).map((_, index) => (
              <CyberApeSearchWalletApeButtonSkeleton key={index} />
            ))}
          </main>
        </CyberApeSearchWalletApesContainer>
      )}
      {currentWalletNFTList && (
        <CyberApeSearchWalletApesContainer>
          <header>
            <h2>Your Cyber Apes</h2>
          </header>
          <main>
            {currentWalletNFTList.map((nftData, index: number) => (
              <CyberApeSearchWalletApeButton
                key={index}
                isSelectedApe={apeData?.index === nftData.index}
                onClick={() => setInputIdentifier(nftData.index)}
              >
                <CyberApeRenderer size="40px" traits={nftData.traits} />
                <span>{nftData.index}</span>
              </CyberApeSearchWalletApeButton>
            ))}
          </main>
        </CyberApeSearchWalletApesContainer>
      )}
      {!apeData && errorFetchingNFT && (
        <CyberApeSearchWarningTitle>
          Error trying to find the ape you were looking for...
        </CyberApeSearchWarningTitle>
      )}
      {!apeData && isLoadingResult && (
        <CyberApeSearchWarningTitle>
          Looking for that ape in the metaverse...
        </CyberApeSearchWarningTitle>
      )}
      {!apeData && !isLoadingResult && (
        <CyberApeSearchWarningTitle>
          Search for any Cyber Ape
        </CyberApeSearchWarningTitle>
      )}
      {apeData !== undefined && apeData !== null && inputIdentifier && (
        <CyberApeSearchResultContainer>
          <CyberApeSearchResultRenderer>
            <CyberApeRenderer size="350px" traits={apeData.traits} />
          </CyberApeSearchResultRenderer>

          <CyberApeSearchResultContent>
            <CyberApeSearchResultHeader>
              <CyberApeSearchResultHeaderIndex>
                <header>
                  <h2>CYBER APE</h2>
                  <span>OUT OF LOCKDOWN</span>
                </header>
                <h1>#{apeData.index}</h1>
              </CyberApeSearchResultHeaderIndex>
              <CyberApeSearchResultHeaderRarity>
                <header>
                  <h2>RANK</h2>
                  <RaritySpan rank={apeData.rank} />
                </header>
                <h1>{apeData.rank}</h1>
              </CyberApeSearchResultHeaderRarity>
            </CyberApeSearchResultHeader>

            <CyberApeSearchResultTraitsContainer>
              {Object.keys(apeData.traits).map((traitName: string, index) => (
                <CyberApeSearchResultTrait key={index}>
                  <CyberApeSearchResultTraitName>
                    {traitName}
                  </CyberApeSearchResultTraitName>
                  <CyberApeSearchResultTraitValue>
                    {
                      // @ts-ignore
                      apeData.traits[traitName]
                    }
                  </CyberApeSearchResultTraitValue>
                </CyberApeSearchResultTrait>
              ))}
            </CyberApeSearchResultTraitsContainer>

            <CyberApeSearchResultControls>
              <SignatureButton onClick={() => {}} accent="#111">
                SOLSCAN
              </SignatureButton>
              <SignatureButton onClick={() => {}} accent="#111">
                MAGICEDEN
              </SignatureButton>
            </CyberApeSearchResultControls>
          </CyberApeSearchResultContent>
        </CyberApeSearchResultContainer>
      )}
    </CyberApeSearchContainer>
  );
};

export default CyberApeSearch;
