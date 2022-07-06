import {
  SuperModalCloseButton,
  SuperModalContainer,
  SuperModalContainerWrapper,
  SuperModalHeader,
  SuperModalHeaderFloatingTitle,
  SuperModalMain,
} from "./styles";
import { NextPage } from "next/types";
import { useContext, useEffect, useRef } from "react";
import { SuperModalProps } from "./types";
import SuperModalContext from "../../contexts/SuperModal";
import CloseIcon from "./CloseIcon";
import CrownDecor from "./CrownDecor";
import TopEnergyPipe from "./TopEnergyPipe";
import BottomEnergyPipe from "./BottomEnergyPipe";
import TopLeftEnergyPipe from "./TopLeftEnergyPipe";
import TopRightEnergyPipe from "./TopRightEnergyPipe";
import BottomRightEnergyPipe from "./BottomRightEnergyPipe";
import BottomLeftEnergyPipe from "./BottomLeftEnergyPipe";
import LeftEnergyPipe from "./LeftEnergyPipe";
import RightEnergyPipe from "./RightEnergyPipe";
import { APE_DATA } from "../../constants/cyberapeage-data";
import CyberApeRenderer from "../CyberApeRenderer";

const SuperModal: NextPage<SuperModalProps> = ({ title, children }) => {
  const { close } = useContext(SuperModalContext);
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    const modal = modalRef.current;
    const animationDuration: number = 125;

    modal?.animate(
      [
        { opacity: 1, scale: 1, transform: "scale(1)" },
        { opacity: 0, scale: 0, transform: "scale(0)" },
      ],
      {
        duration: animationDuration,
        fill: "forwards",
        easing: "ease-in",
      }
    );

    modal?.parentElement?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: animationDuration,
      fill: "forwards",
      easing: "ease-in",
    });

    setTimeout(close, animationDuration);
  };

  const shortcutsListener = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const ifOutsideModalExitQuickView = (event: MouseEvent) => {
    if (event.target === modalRef?.current?.parentElement) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", shortcutsListener);
    window.addEventListener("click", ifOutsideModalExitQuickView);

    return () => {
      window.removeEventListener("keydown", shortcutsListener);
      window.removeEventListener("click", ifOutsideModalExitQuickView);
    };
  }, []);

  return (
    <SuperModalContainerWrapper>
      <SuperModalContainer ref={modalRef}>
        <CrownDecor />
        <TopEnergyPipe />
        <BottomRightEnergyPipe />
        <BottomLeftEnergyPipe />
        <BottomEnergyPipe />
        <LeftEnergyPipe />
        <RightEnergyPipe />
        <TopRightEnergyPipe />
        <TopLeftEnergyPipe />
        <SuperModalHeader>
          <SuperModalHeaderFloatingTitle>{title}</SuperModalHeaderFloatingTitle>
          <SuperModalCloseButton onClick={closeModal}>
            <CloseIcon />
          </SuperModalCloseButton>
        </SuperModalHeader>
        <SuperModalMain>{children}</SuperModalMain>
      </SuperModalContainer>
    </SuperModalContainerWrapper>
  );
};

export default SuperModal;
