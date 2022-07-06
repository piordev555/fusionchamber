import { NextPage } from "next/types";
import { SVGProps } from "../../types";
import { MagicEdenIconSVG } from "./styles";

const MagicEdenIcon: NextPage<SVGProps> = ({ fill, stroke }) => {
  return (
    <MagicEdenIconSVG
      width={22}
      height={13}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      stroke={stroke}
    >
      <path
        d="M.957 0v.929H0V12.07h.957V13H2.87v-.929h.956v-6.5h.957V6.5h.956v.929h.957v.928h1.913V7.43h.956V6.5h.957v-.929h.956v-.928h1.913v.928h.957V7.43h-.957v.928h-.956v.929h-.957v.928h-.956v1.857h.956V13h9.566v-.929H22v-1.857h-.956v-.928H16.26v-.929h.956V7.43h.957V5.57h-.957v-.928h-.956v-.929h4.783v-.928H22V.929h-.956V0h-8.61v.929h-.956v.928h-.956v.929h-.957v.928H8.61v.929H6.696v-.929h-.957v-.928h-.956v-.929h-.957V.93H2.87V0H.957z"
        fill="#fff"
      />
    </MagicEdenIconSVG>
  );
};

export default MagicEdenIcon;
