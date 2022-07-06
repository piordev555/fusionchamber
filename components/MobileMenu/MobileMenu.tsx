import { NextPage } from "next/types";
import { useContext } from "react";
import MobileMenuContext from "../../contexts/MobileMenu";
import SuperModalContext from "../../contexts/SuperModal";
import CyberApeSearch from "../CyberApeSearch";
import DiscordIcon from "../DiscordIcon";
import HubComingSoon from "../GlobalHeader/HubComingSoon";
import CloseIcon from "../SuperModal/CloseIcon";
import TwitterIcon from "../TwitterIcon";
import {
  ComingSoonTitle,
  Discord,
  MenuItem,
  MobileMenuCloseButton,
  MobileMenuContainer,
  MobileMenuContainerWrapper,
  MobileMenuItemsWrapper,
  MobileMenuSocialsWrapper,
  Twitter,
} from "./styles";

const MobileMenu: NextPage = () => {
  const { closeMobileMenu } = useContext(MobileMenuContext);

  const { open } = useContext(SuperModalContext);
  const { openMobileMenu } = useContext(MobileMenuContext);

  function openExplorer(): void {
    open("troop's explorer", <CyberApeSearch />);
  }

  function openShop(): void {
    open("troop's shop", <ComingSoonTitle>Coming Soon</ComingSoonTitle>);
  }

  function openHub(): void {
    open("troop's hub", <HubComingSoon />);
  }

  return (
    <MobileMenuContainer>
      <MobileMenuContainerWrapper>
        <MobileMenuCloseButton onClick={closeMobileMenu}>
          <CloseIcon />
        </MobileMenuCloseButton>
        <MobileMenuItemsWrapper>
          <MenuItem onClick={openHub}>Troop&apos;s Hub</MenuItem>
          <MenuItem onClick={openShop}>shop</MenuItem>
          <MenuItem onClick={openExplorer}>explorer</MenuItem>
        </MobileMenuItemsWrapper>
        <MobileMenuSocialsWrapper>
          <Twitter href="https://twitter.com/CyberApeAge" target="_blank" rel="noreferrer">
            <TwitterIcon />
            CYBERAPEAGE
          </Twitter>

          <Discord href="https://discord.gg/XSKH5Wcs" target="_blank" rel="noreferrer">
            <DiscordIcon />
            discord
          </Discord>
        </MobileMenuSocialsWrapper>
      </MobileMenuContainerWrapper>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
