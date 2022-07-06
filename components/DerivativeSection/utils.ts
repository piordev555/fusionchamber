import { CyberApe } from "../../types/ape-traits";

export const invertLevelFromBackground = (background: CyberApe["background"]) => {
  switch (background) {
    case "Binary":
      return 1;
      break;
    case "Blue Plain":
      return 1;
      break;
    case "Blue Gradient":
      return 1;
      break;
    case "Brown Gradient":
      return 0;
      break;
    case "Purple Gradient":
      return 0;
      break;
    case "Red Gradient":
      return 0;
      break;
    case "City":
      return 1;
      break;
    case "Cream Plain":
      return 1;
      break;
    case "Cyber Age":
      return 0;
      break;
    case "Psychedelic":
      return 1;
      break;
    case "Violet Plain":
      return 1;
      break;
  }
};
