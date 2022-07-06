import { NextPage } from "next/types";
import * as React from "react";
import { PipeHeadProps } from "./types";
import { PipeHeadBodySVG, PipeHeadSVGWrapper } from "./styles";
import Color from "color";

const PipeHead: NextPage<PipeHeadProps> = ({ accent, pipeOrigin }) => {
  const MAIN_COLOR: Color = Color(accent);
  const SECONDARY_COLOR: Color = Color(accent).lighten(0.09);
  const TERTIARY_COLOR: Color = Color(accent).lighten(0.2);

  return (
    <PipeHeadSVGWrapper pipeOrigin={pipeOrigin}>
      <svg width={25} height={92} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 18h18v31H0V18z"
          fill={TERTIARY_COLOR.toString()}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h18v6h7v80h-7v6H0V61h18V12H0V0z"
          fill={MAIN_COLOR.toString()}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 12H0v6h18v-6H6zM0 49h18v12H0V49z"
          fill={SECONDARY_COLOR.toString()}
        />
      </svg>
      <PipeHeadBodySVG
        width={50}
        height={68}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 68"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 13H0v30h30V13H18z"
          fill={TERTIARY_COLOR.toString()}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 43H0v12h30V43H6z"
          fill={SECONDARY_COLOR.toString()}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 55h30v13H0V55zM0 0h30v6H0V0z"
          fill={MAIN_COLOR.toString()}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6h30v7H0V6z"
          fill={SECONDARY_COLOR.toString()}
        />
      </PipeHeadBodySVG>
    </PipeHeadSVGWrapper>
  );
};

export default PipeHead;
