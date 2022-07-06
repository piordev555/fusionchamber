import { NextPage } from "next/types";
import { useEffect, useRef, useState } from "react";
import BaseBackground from "./BaseBackground";
import ColoredSparks from "./ColoredSparks";
import ContrastBaseBackground from "./ContrastBaseBackground";
import ContrastBaseFilledBackground from "./ContrastBaseFilledBackground";
import MovingBackground from "./MovingBackground";
import Sparks from "./Sparks";
import {
  SignatureButtonContainer,
  SignatureButtonContentPlaceholder,
  SignatureButtonContentWrapper,
} from "./styles";
import { SignatureButtonProps } from "./types";

const SignatureButton: NextPage<SignatureButtonProps> = ({
  onClick,
  isContrast,
  accent,
  backgroundColor,
  children,
  customStyle,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const SignatureButtonContainerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const setIsHoverTrue = () => setIsHover(true);
    const setIsHoverFalse = () => setIsHover(false);

    const SignatureButtonContainerEl = SignatureButtonContainerRef.current;

    if (!SignatureButtonContainerEl) return;

    SignatureButtonContainerEl.addEventListener("mouseenter", setIsHoverTrue);
    SignatureButtonContainerEl.addEventListener("mouseleave", setIsHoverFalse);

    return () => {
      SignatureButtonContainerEl.removeEventListener(
        "mouseenter",
        setIsHoverTrue
      );
      SignatureButtonContainerEl.removeEventListener(
        "mouseleave",
        setIsHoverFalse
      );
    };
  }, []);

  return (
    <SignatureButtonContainer
      onClick={onClick}
      ref={SignatureButtonContainerRef}
      customStyle={customStyle}
    >
      <MovingBackground isHover={isHover} />
      {isContrast ? (
        <ContrastBaseBackground />
      ) : (
        <BaseBackground backgroundColor={backgroundColor} />
      )}
      {isHover && (
        <>
          <Sparks accent={accent} />
          <ColoredSparks accent={accent} />
          <ContrastBaseFilledBackground accent={accent} />
        </>
      )}
      <SignatureButtonContentPlaceholder>
        {children}
      </SignatureButtonContentPlaceholder>
      <SignatureButtonContentWrapper isHover={isHover}>
        {children}
      </SignatureButtonContentWrapper>
    </SignatureButtonContainer>
  );
};

export default SignatureButton;
