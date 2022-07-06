import Image from "next/image";
import { NextPage } from "next/types";
import { CyberApeSearchContainer as WeekDataContainer } from "./styles";

const WeekDataPopup: NextPage = () => {
  return (
    <WeekDataContainer>
      hello there{" "}
      <img src="https://c.tenor.com/-LlG5WSoK74AAAAj/monkey.gif" alt="monke" />
    </WeekDataContainer>
  );
};

export default WeekDataPopup;
