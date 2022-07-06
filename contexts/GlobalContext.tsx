import { NextPage } from "next/types";
import { BloomingDataContextProvider } from "./BloomingData";
import { MobileMenuContextProvider } from "./MobileMenu";
import { SuperModalContextProvider } from "./SuperModal";
import { GlobalContextProps } from "./types";
import { Wallet } from "./Wallet";
import { WalletTokensContextProvider } from "./WalletTokens";

const GlobalContext: NextPage<GlobalContextProps> = ({ children }) => {
  return (
    <>
      <Wallet>
        <WalletTokensContextProvider>
          <BloomingDataContextProvider>
            <MobileMenuContextProvider>
              <SuperModalContextProvider>
                <>{children}</>
              </SuperModalContextProvider>
            </MobileMenuContextProvider>
          </BloomingDataContextProvider>
        </WalletTokensContextProvider>
      </Wallet>
    </>
  );
};

export default GlobalContext;
