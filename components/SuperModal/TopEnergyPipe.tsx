import { NextPage } from "next/types";
import { FlickeringPath, TopEnergyPipeSVG } from "./styles";

const TopEnergyPipe: NextPage = () => {
  return (
    <TopEnergyPipeSVG
      width={850}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 850 12"
      preserveAspectRatio="none"
    >
      <FlickeringPath fill="#D5D5D5" d="M850 3.429V1.715H0v1.714z" />
      <path fill="#353535" d="M850 1.714V0H0v1.714zM850 12v-1.714H0V12z" />
      <FlickeringPath fill="#fff" d="M850 5.143V3.429H0v1.714zM850 6.857V5.143H0v1.714z" />
      <FlickeringPath fill="#D5D5D5" d="M850 8.571V6.857H0v1.714z" />
      <FlickeringPath fill="#BDBDBD" d="M850 10.286V8.572H0v1.714z" />
    </TopEnergyPipeSVG>
  );
};

export default TopEnergyPipe;
