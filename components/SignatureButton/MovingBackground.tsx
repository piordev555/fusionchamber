import { NextPage } from "next/types";
import { MovingBackgroundContainer } from "./styles";
import { MovingBackgroundProps } from "./types";

const MovingBackground: NextPage<MovingBackgroundProps> = ({ isHover }) => {
  return (
    <MovingBackgroundContainer isHover={isHover}>
      <div></div>
      <div></div>
    </MovingBackgroundContainer>
  );
};

export default MovingBackground;
