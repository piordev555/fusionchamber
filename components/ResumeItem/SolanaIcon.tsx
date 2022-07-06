import { NextPage } from "next/types";
import { ResumeIconProps } from "./types";

const SolanaIcon: NextPage<ResumeIconProps> = ({ fill }) => {
  return (
    <svg
      width="100"
      viewBox="0 0 61 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.436 0H10.949v1.567H9.385v1.566H7.82V4.7H6.256v1.567H4.692v1.566H3.128V9.4H1.564v1.567H0v1.566h51.615v-1.566h1.564V9.4h1.565V7.833h1.564V6.267h1.564V4.7h1.564V3.133H61V1.567h-1.564V0zM1.564 17.233h48.487V18.8h1.564v1.567h1.564v1.566h1.565V23.5h1.564v1.567h1.564v1.566h1.564V28.2H61v1.567H9.385V28.2H7.82v-1.567H6.256v-1.566H4.692V23.5H3.128v-1.567H1.564v-1.566H0V18.8h1.564v-1.567zM59.436 34.467v1.566H61V37.6h-1.564v1.567h-1.564v1.566h-1.564V42.3h-1.564v1.567h-1.565v1.566h-1.564V47H0v-1.567h1.564v-1.566h1.564V42.3h1.564v-1.567h1.564v-1.566h1.565V37.6h1.564v-1.567h1.564v-1.566h48.487z"
        fill={fill}
      />
    </svg>
  );
};

export default SolanaIcon;
