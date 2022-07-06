import { NextPage } from "next/types";
import { BloomingContainerDiv } from "./styles";
import { BloomingContainerProps } from "./types";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import Color from "color";
import { BLOOMING_EFFECT_ALPHA, BLOOMING_EFFECT_RADIUS } from "./contants";
import { CartesianCoords } from "../../types";
import BloomingDataContext from "../../contexts/BloomingData";

const BloomingContainer: NextPage<BloomingContainerProps> = ({
  accent,
  children,
  customStyles,
}) => {
  const { currentMouseCoords } = useContext(BloomingDataContext);

  const [circleCoords, setCircleCoords] = useState<CartesianCoords>({ x: 0, y: 0 });
  const [isContainerInViewport, setIsContainerInViewport] = useState<boolean>(true);

  const bloomingContainerDivRef = useRef<HTMLDivElement>(null);

  const isVisible = () => {
    if (!bloomingContainerDivRef.current) return false;

    const { top, left, bottom, right } = bloomingContainerDivRef.current.getBoundingClientRect();

    return top < window.innerHeight && left < window.innerWidth && bottom > 0 && right > 0;
  };

  useEffect(() => {
    const handleScroll = (event: Event) => setIsContainerInViewport(isVisible());

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isContainerInViewport) return;
    if (!bloomingContainerDivRef.current) return;

    setCircleCoords({
      x: currentMouseCoords.x - bloomingContainerDivRef.current.getBoundingClientRect().left,
      y: currentMouseCoords.y - bloomingContainerDivRef.current.getBoundingClientRect().top,
    });
  }, [currentMouseCoords]);

  return (
    <BloomingContainerDiv
      ref={bloomingContainerDivRef}
      background={`radial-gradient(circle at ${circleCoords.x}px ${circleCoords.y}px, ${Color(
        accent
      )
        .alpha(BLOOMING_EFFECT_ALPHA)
        .string()} 0%,${Color(accent)
        .alpha(0.05)
        .string()} calc(0% + ${BLOOMING_EFFECT_RADIUS}px)) no-repeat scroll 0% 0% border-box`}
      accent={accent}
      circleCoords={circleCoords}
      customStyles={customStyles}
    >
      {children}
    </BloomingContainerDiv>
  );
};

export default BloomingContainer;
