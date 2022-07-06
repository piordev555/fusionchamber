import { NextPage } from "next/types";
import * as React from "react";
import { RightEnergyPipeSVG } from "./styles";

const RightEnergyPipe: NextPage = () => {
  return (
    <RightEnergyPipeSVG
      width={12}
      height={673}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 673"
      preserveAspectRatio="none"
    >
      <path
        d="M3.428 0H1.714v673h1.714V0zM1.714 0H0v673h1.714V0zM12 0h-1.714v673H12V0zM5.143 0H3.428v673h1.715V0zM6.857 0H5.143v673h1.714V0zM8.571 0H6.857v673h1.714V0z"
        fill="#3C3C3C"
      />
      <path d="M10.286 0H8.57v673h1.715V0z" fill="#3C3C3C" />
    </RightEnergyPipeSVG>
  );
};

export default RightEnergyPipe;
