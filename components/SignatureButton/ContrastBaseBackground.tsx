import { NextPage } from "next/types";
import { ContrastBaseBackgroundSVG } from "./styles";

const ContrastBaseBackground: NextPage = () => {
  return (
    <ContrastBaseBackgroundSVG
      width={203}
      height={48}
      viewBox="0 0 203 48"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h187l16 19v29H14.5L0 31.5V0z" fill="#fff" fillOpacity={0.15} />
    </ContrastBaseBackgroundSVG>
  );
};

export default ContrastBaseBackground;
