import { NextPage } from "next/types";
import { FlickeringPath, TopRightEnergyPipeSVG } from "./styles";

const TopRightEnergyPipe: NextPage = () => {
  return (
    <TopRightEnergyPipeSVG
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      preserveAspectRatio="none"
    >
      <path
        fill="#353535"
        d="M20.575 3.429h1.715v1.715h-1.715zM22.289 5.144h1.715v6.858h-1.715zM12.001 10.288h1.715v1.715h-1.715z"
      />
      <FlickeringPath
        d="M15.431 6.859h1.715v1.714H15.43V6.86zM17.145 5.144h1.715v1.714h-1.714V5.145zM17.146 6.859h1.714v1.714h-1.714V6.86zM18.86 6.858h1.714v1.715H18.86V6.858zM18.86 8.573h1.714v1.715H18.86V8.573zM18.86 10.288h1.714v1.714H18.86v-1.714zM17.146 8.573h1.714v1.715h-1.715V8.573zM17.145 10.288h1.715v1.714h-1.715v-1.714zM15.431 5.144h1.714v1.715h-1.714V5.144zM13.716 5.144h1.715v1.715h-1.714V5.143z"
        fill="#fff"
      />
      <FlickeringPath
        d="M12.002 5.144h1.714v1.714h-1.714V5.144zM15.431 3.43h1.715v1.714H15.43V3.429z"
        fill="#fff"
      />
      <FlickeringPath d="M13.716 3.43h1.715v1.714h-1.714V3.429z" fill="#fff" />
      <FlickeringPath d="M12.002 3.43h1.714v1.714h-1.714V3.429z" fill="#fff" />
      <FlickeringPath d="M12.002 6.858h1.714v1.715h-1.714V6.858z" fill="#D5D5D5" />
      <FlickeringPath
        d="M13.716 6.858h1.715v1.715h-1.715V6.858zM17.145 3.429h1.715v1.715h-1.715V3.429z"
        fill="#D5D5D5"
      />
      <FlickeringPath
        d="M17.145 1.714h1.715V3.43h-1.715V1.714zM15.431 1.714h1.714V3.43h-1.714V1.714zM13.716 1.714h1.715V3.43h-1.714V1.714z"
        fill="#D5D5D5"
      />
      <FlickeringPath
        d="M12.002 1.714h1.714V3.43h-1.714V1.714zM18.86 3.429h1.714v1.715H18.86V3.429zM18.86 5.144h1.714v1.714H18.86V5.144zM20.574 5.144h1.716v1.714h-1.716V5.144z"
        fill="#D5D5D5"
      />
      <FlickeringPath
        d="M20.574 6.858h1.716v1.715h-1.715V6.858zM20.575 8.573h1.715v1.714h-1.715V8.573zM20.575 10.287h1.715v1.715h-1.715v-1.715zM15.431 8.573h1.715v1.714H15.43V8.573zM15.431 10.287h1.715v1.715H15.43v-1.715z"
        fill="#D5D5D5"
      />
      <FlickeringPath d="M12.002 8.573h1.714v1.715h-1.714V8.573z" fill="#BDBDBD" />
      <FlickeringPath
        d="M13.716 8.573h1.715v1.715h-1.715V8.573zM13.716 10.288h1.715v1.714h-1.714v-1.714z"
        fill="#BDBDBD"
      />
      <path
        fill="#1E1E1E"
        d="M18.859 1.714h1.715v1.715h-1.715zM12.001 0h6.858v1.715h-6.858zM12.001 12.002h12.002v1.715H12.001zM12.001 15.432h12.002v1.715H12.001z"
      />
      <path fill="#353535" d="M12.001 13.717h12.002v1.715H12.001z" />
      <path
        fill="#1E1E1E"
        d="M12.001 18.861h12.002v1.715H12.001zM12.001 22.29h12.002v1.715H12.001z"
      />
      <path fill="#353535" d="M12.001 20.575h12.002v1.715H12.001z" />
      <path fill="#1E1E1E" d="M0 12.002V0h1.715v12.002zM3.43 12.002V0h1.714v12.002z" />
      <path fill="#353535" d="M1.714 12.002V0H3.43v12.002z" />
      <path fill="#1E1E1E" d="M6.858 12.003V0h1.715v12.002zM10.288 12.002V0h1.715v12.002z" />
      <path fill="#353535" d="M8.573 12.003V0h1.715v12.002z" />
    </TopRightEnergyPipeSVG>
  );
};

export default TopRightEnergyPipe;
