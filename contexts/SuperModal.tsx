import { NextPage } from "next/types";
import React, { createContext, useState } from "react";
import SuperModal from "../components/SuperModal";
import { SuperModalContextData, SuperModalContextProviderProps } from "./types";

const SuperModalContext = createContext({} as SuperModalContextData);

export const SuperModalContextProvider: NextPage<SuperModalContextProviderProps> = ({
  children,
}) => {
  const [isSuperModalOpen, setIsSuperModalOpen] = useState<boolean>(false);
  const [superModalChildren, setSuperModalChildren] = useState<React.ReactNode>(null);
  const [superModalTitle, setSuperModalTitle] = useState<string>("");

  const open = (title: string, children: React.ReactNode) => {
    setSuperModalChildren(children);
    setSuperModalTitle(title);
    setIsSuperModalOpen(true);
  };

  const close = () => {
    setSuperModalChildren(null);
    setSuperModalTitle("");
    setIsSuperModalOpen(false);
  };

  return (
    <SuperModalContext.Provider value={{ isSuperModalOpen, open, close }}>
      {children}
      {isSuperModalOpen && superModalChildren && (
        <SuperModal title={superModalTitle}>{superModalChildren}</SuperModal>
      )}
    </SuperModalContext.Provider>
  );
};

export default SuperModalContext;
