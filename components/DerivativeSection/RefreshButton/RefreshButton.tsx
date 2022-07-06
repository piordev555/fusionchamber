import { NextPage } from "next/types";
import { useContext, useEffect, useRef, useState } from "react";
import DerivativeSectionContext from "../../../contexts/DerivativeSection";
import BaseBackground from "./BaseBackground";
import ColoredSparks from "./ColoredSparks";
import ContrastBaseBackground from "./ContrastBaseBackground";
import ContrastBaseFilledBackground from "./ContrastBaseFilledBackground";
import CountdownBackground from "./CountdownBackground";
import MovingBackground from "./MovingBackground";
import Sparks from "./Sparks";
import {
  RefreshButtonContainer,
  RefreshButtonContentPlaceholder,
  RefreshButtonContentWrapper,
} from "./styles";
import { RefreshButtonProps } from "./types";

const RefreshButton: NextPage<RefreshButtonProps> = ({ onClick, accent, children }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [countdownBackgroundKey, setCountdownBackgroundKey] = useState<number>(0);
  const { currentApeData } = useContext(DerivativeSectionContext);

  const RefreshButtonContainerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const setIsHoverTrue = () => setIsHover(true);
    const setIsHoverFalse = () => setIsHover(false);

    const RefreshButtonContainerEl = RefreshButtonContainerRef.current;

    if (!RefreshButtonContainerEl) return;

    RefreshButtonContainerEl.addEventListener("mouseenter", setIsHoverTrue);
    RefreshButtonContainerEl.addEventListener("mouseleave", setIsHoverFalse);

    return () => {
      RefreshButtonContainerEl.removeEventListener("mouseenter", setIsHoverTrue);
      RefreshButtonContainerEl.removeEventListener("mouseleave", setIsHoverFalse);
    };
  }, []);

  useEffect(() => setCountdownBackgroundKey(Math.floor(Math.random() * 10)), [currentApeData]);

  return (
    <RefreshButtonContainer onClick={onClick} ref={RefreshButtonContainerRef}>
      <MovingBackground isHover={isHover} />
      {currentApeData && <CountdownBackground accent={accent} key={countdownBackgroundKey} />}
      <BaseBackground />
      {isHover && (
        <>
          <Sparks accent={accent} />
          <ColoredSparks accent={accent} />
          <ContrastBaseFilledBackground accent={accent} />
        </>
      )}
      <RefreshButtonContentPlaceholder>{children}</RefreshButtonContentPlaceholder>
      <RefreshButtonContentWrapper isHover={isHover}>{children}</RefreshButtonContentWrapper>
    </RefreshButtonContainer>
  );
};

export default RefreshButton;
