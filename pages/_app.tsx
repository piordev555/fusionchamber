import type { AppProps } from "next/app";
import { useEffect } from "react";
import GlobalContext from "../contexts/GlobalContext";

import { GlobalStyles } from "../styles/GlobalStyle";
import { logCredits } from "../utils";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(logCredits, []);

  return (
    <>
      <GlobalContext>
        <Component {...pageProps} />
      </GlobalContext>
      <GlobalStyles />
    </>
  );
}
export default MyApp;
