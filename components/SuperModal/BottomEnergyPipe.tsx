import { NextPage } from "next";
import { BottomEnergyPipeSVG } from "./styles";

const BottomEnergyPipe: NextPage = () => {
  return (
    <BottomEnergyPipeSVG
      width={850}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 850 12"
      preserveAspectRatio="none"
    >
      <path
        d="M850 3.429V1.714H0V3.43h850zM850 1.714V0H0v1.714h850zM850 12v-1.714H0V12h850z"
        fill="#3C3C3C"
      />
      <path
        d="M850 5.143V3.429H0v1.714h850zM850 6.857V5.143H0v1.714h850zM850 8.571V6.857H0v1.714h850z"
        fill="#3C3C3C"
      />
      <path d="M850 10.286V8.57H0v1.715h850z" fill="#3C3C3C" />
    </BottomEnergyPipeSVG>
  );
};

export default BottomEnergyPipe;
