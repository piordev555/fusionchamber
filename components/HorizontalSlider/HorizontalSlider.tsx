import { MotionValue, useMotionValue } from "framer-motion";
import { NextPage } from "next/types";
import { useEffect, useRef, useState } from "react";
import ArrowIcon from "./ArrowIcon";
import {
  HorizontalSliderContainer,
  HorizontalSliderControls,
  HorizontalSliderControlsButton,
  HorizontalSliderControlsButtonsWrapper,
  HorizontalSliderInnerContainer,
} from "./styles";
import { HorizontalSliderProps } from "./types";

const HorizontalSlider: NextPage<HorizontalSliderProps> = ({ hasControls, children }) => {
  const SLIDE_AMOUNT = 200;
  const MOTION_VALUE: MotionValue = useMotionValue(0);

  const [leftConstraint, setLeftConstraint] = useState<number>(0);

  const horizontalSliderContainerRef = useRef<HTMLDivElement>(null);

  function slideLeft() {
    const CURRENT_MOTION_VALUE = MOTION_VALUE.get();
    if (CURRENT_MOTION_VALUE >= 0) return;
    console.log("Slide to the left");

    MOTION_VALUE.set(CURRENT_MOTION_VALUE + SLIDE_AMOUNT);
  }

  function slideRight() {
    const CURRENT_MOTION_VALUE = MOTION_VALUE.get();

    console.log("CURRENT_MOTION_VALUE", CURRENT_MOTION_VALUE);

    if (!horizontalSliderContainerRef.current) return;
    if (CURRENT_MOTION_VALUE <= -horizontalSliderContainerRef.current.offsetWidth) return;
    console.log("Slide to the right");

    MOTION_VALUE.set(CURRENT_MOTION_VALUE - SLIDE_AMOUNT);
  }

  useEffect(() => {
    if (!horizontalSliderContainerRef.current) return;

    const CONTAINER_WIDTH = horizontalSliderContainerRef.current.scrollWidth;
    const CONTAINER_OFFSET = horizontalSliderContainerRef.current.offsetWidth;

    // console.log(CONTAINER_WIDTH, CONTAINER_OFFSET);

    const LEFT_CONSTRAINT = CONTAINER_WIDTH - CONTAINER_OFFSET;

    setLeftConstraint(LEFT_CONSTRAINT);
  }, []);

  useEffect(() => {
    // console.log("LEFT CONSTRAINT CHANGED TO:", leftConstraint);
  }, [leftConstraint]);

  return (
    <HorizontalSliderContainer ref={horizontalSliderContainerRef}>
      <HorizontalSliderInnerContainer
        drag="x"
        style={{ x: MOTION_VALUE }}
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -leftConstraint }}
        whileTap={{ scale: 0.985, cursor: "grabbing" }}
      >
        {children}
      </HorizontalSliderInnerContainer>
      {hasControls && (
        <HorizontalSliderControls>
          <span>grab and slide to move sideways</span>
          <HorizontalSliderControlsButtonsWrapper>
            <HorizontalSliderControlsButton onClick={slideLeft}>
              <ArrowIcon />
            </HorizontalSliderControlsButton>
            <HorizontalSliderControlsButton onClick={slideRight}>
              <ArrowIcon />
            </HorizontalSliderControlsButton>
          </HorizontalSliderControlsButtonsWrapper>
        </HorizontalSliderControls>
      )}
    </HorizontalSliderContainer>
  );
};

export default HorizontalSlider;
