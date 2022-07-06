import { CyberApe } from "./ape-traits";

export interface SVGProps {
  fill?: string;
  stroke?: string;
}

export interface CartesianCoords {
  x: number;
  y: number;
}

export interface TokenData {
  index: string;
  token: string;
  rank: string;
  traits: CyberApe;
}

export type CyberApeRarityLabel = "Mythic" | "Legendary" | "Epic" | "Rare" | "Uncommon" | "Common";

export interface ResponseJSON<T> {
  success: boolean;
  errorMessage?: string;
  errorCode?: string;
  data: T;
  meta: {
    time: string;
  };
}

export type Item = "booster" | "beakers" | "WL" | "Upgrade";

export interface InventoryItemData {
  signature: string;
  address: string;
  item: string;
  quantity: number;
}
