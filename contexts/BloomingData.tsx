import { NextPage } from "next/types";
import React, { createContext, useEffect, useState } from "react";
import { CartesianCoords } from "../types";
import { BloomingDataContextData, BloomingDataContextProviderProps } from "./types";

const BloomingDataContext = createContext({} as BloomingDataContextData);

export const BloomingDataContextProvider: NextPage<BloomingDataContextProviderProps> = ({
  children,
}) => {
  const [currentMouseCoords, setCurrentMouseCoords] = useState<CartesianCoords>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) =>
      setCurrentMouseCoords({ x: event.clientX, y: event.clientY });

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.document.addEventListener("mouseover", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.document.removeEventListener("mouseover", handleMouseMove);
    };
  }, []);

  return (
    <BloomingDataContext.Provider value={{ currentMouseCoords }}>
      {children}
    </BloomingDataContext.Provider>
  );
};

export default BloomingDataContext;
