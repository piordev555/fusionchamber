import { NextPage } from "next/types";
import { BaseBackgroundSVG } from "./styles";

const BaseBackground: NextPage = () => {
  return (
    <BaseBackgroundSVG
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
        d="M83 19.547L67.802 1.5H1.5v29.435L15.179 46.5H83V19.547zM14.5 48L0 31.5V0h68.5l16 19v29h-70z"
        fill="#fff"
        fillOpacity={0.35}
      />
    </BaseBackgroundSVG>
  );
};

export default BaseBackground;
