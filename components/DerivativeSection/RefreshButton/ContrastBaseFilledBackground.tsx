import { NextPage } from "next/types";
import { ContrastBaseFilledBackgroundSVG } from "./styles";
import { ContrastBaseBackgroundFilledProps } from "./types";

const ContrastBaseFilledBackground: NextPage<ContrastBaseBackgroundFilledProps> = ({ accent }) => {
  return (
    <ContrastBaseFilledBackgroundSVG
      width={85}
      height={48}
      viewBox="0 0 85 48"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 48L0 31.5V0h68.5l16 19v29h-70z"
        fill={accent}
        fillOpacity={1}
      />
    </ContrastBaseFilledBackgroundSVG>
  );
};

export default ContrastBaseFilledBackground;
