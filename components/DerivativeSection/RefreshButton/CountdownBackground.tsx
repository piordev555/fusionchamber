import { NextPage } from "next/types";
import { CountdownBackgroundSVG } from "./styles";
import { CountdownBackgroundProps } from "./types";

const CountdownBackground: NextPage<CountdownBackgroundProps> = ({ accent }) => {
  return (
    <CountdownBackgroundSVG
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
    </CountdownBackgroundSVG>
  );
};

export default CountdownBackground;
