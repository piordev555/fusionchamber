import { NextPage } from "next/types";
import { FlickeringPath, TopLeftEnergyPipeSVG } from "./styles";

const TopLeftEnergyPipe: NextPage = () => {
  return (
    <TopLeftEnergyPipeSVG
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      preserveAspectRatio="none"
    >
      <path
        fill="#353535"
        d="M3.729 3.429H2.015v1.714h1.714zM2.015 5.143H.3V12h1.714zM12.3 10.286h-1.713V12H12.3z"
      />
      <FlickeringPath fill="#BDBDBD" d="M12.3 8.571h-1.713v1.714H12.3z" />
      <FlickeringPath
        fill="#D5D5D5"
        d="M12.3 6.857h-1.713v1.714H12.3zM10.587 6.857H8.873v1.714h1.714z"
      />
      <FlickeringPath
        fill="#fff"
        d="M8.872 6.857H7.158v1.714h1.714zM7.158 5.143H5.444v1.714h1.714z"
      />
      <FlickeringPath
        fill="#D5D5D5"
        d="M7.158 3.429H5.444v1.714h1.714zM7.158 1.714H5.444v1.714h1.714zM8.872 1.714H7.158v1.714h1.714zM10.587 1.714H8.873v1.714h1.714zM12.3 1.714h-1.713v1.714H12.3zM5.444 3.429H3.73v1.714h1.714zM5.444 5.143H3.73v1.714h1.714zM3.729 5.143H2.015v1.714h1.714zM3.729 6.857H2.015v1.714h1.714zM3.729 8.571H2.015v1.714h1.714zM3.729 10.286H2.015V12h1.714z"
      />
      <FlickeringPath
        fill="#fff"
        d="M7.158 6.857H5.444v1.714h1.714zM5.444 6.857H3.73v1.714h1.714zM5.444 8.571H3.73v1.714h1.714zM5.444 10.286H3.73V12h1.714zM7.158 8.571H5.444v1.714h1.714zM7.158 10.286H5.444V12h1.714zM8.872 5.143H7.158v1.714h1.714zM10.587 5.143H8.873v1.714h1.714zM12.3 5.143h-1.713v1.714H12.3zM8.872 3.429H7.158v1.714h1.714zM10.587 3.429H8.873v1.714h1.714zM12.3 3.429h-1.713v1.714H12.3z"
      />
      <FlickeringPath fill="#BDBDBD" d="M10.587 8.571H8.873v1.714h1.714z" />
      <FlickeringPath
        fill="#D5D5D5"
        d="M8.872 8.571H7.158v1.714h1.714zM8.872 10.286H7.158V12h1.714z"
      />
      <FlickeringPath fill="#BDBDBD" d="M10.587 10.286H8.873V12h1.714z" />
      <path
        fill="#1E1E1E"
        d="M5.444 1.714H3.73v1.714h1.714zM12.3 0H5.445v1.714H12.3zM12 24H0v-1.714h12zM12 20.572H0v-1.714h12z"
      />
      <path fill="#353535" d="M12 22.285H0v-1.714h12z" />
      <path fill="#1E1E1E" d="M12 17.142H0v-1.714h12zM12 13.714H0V12h12z" />
      <path fill="#353535" d="M12 15.428H0v-1.714h12z" />
      <path fill="#1E1E1E" d="M12 12V0h1.714v12zM15.429 12V0h1.714v12z" />
      <path fill="#353535" d="M13.715 12V0h1.714v12z" />
      <path fill="#1E1E1E" d="M18.857 12V0h1.714v12zM22.286 12V0H24v12z" />
      <path fill="#353535" d="M20.571 12V0h1.714v12z" />
    </TopLeftEnergyPipeSVG>
  );
};

export default TopLeftEnergyPipe;
