import { NextPage } from "next/types";
import { CSSProperties } from "styled-components";
import { BaseBackgroundSVG } from "./styles";

export interface BaseBackgroundProps {
  backgroundColor: CSSProperties["color"];
}
//
const BaseBackground: NextPage<BaseBackgroundProps> = ({ backgroundColor }) => {
  return (
    <BaseBackgroundSVG
      width={203}
      height={48}
      viewBox="0 0 203 48"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 14.5 48 L 0 31.5 V 0 h 187 l 16 19 v 29 H 14.5 z"
        stroke="#fff"
        strokeOpacity={0.35}
        strokeWidth={3}
        fill={backgroundColor || "#fff"}
        fillOpacity={backgroundColor != null ? 0.35 : 0}
      />
    </BaseBackgroundSVG>
  );
};

export default BaseBackground;
