export type Ape =
  | "Nothing"
  | "Albino"
  | "Black"
  | "Blue"
  | "Brown"
  | "Cyan"
  | "Gold"
  | "Mutant"
  | "Red"
  | "Robot"
  | "Zombie";

export type Background =
  | "Nothing"
  | "Binary"
  | "Blue Gradient"
  | "Blue Plain"
  | "Brown Gradient"
  | "City"
  | "Cream Plain"
  | "Psychedelic"
  | "Cyber Age"
  | "Purple Gradient"
  | "Red Gradient"
  | "Violet Plain";

export type Ears = "Nothing" | "EarPiece" | "Neon Earring" | "Silver Earring";

export type Eyes =
  | "Nothing"
  | "Angry Visor"
  | "Cyborg Eye"
  | "Solana Visor"
  | "Cyclowear"
  | "Metallic Visor"
  | "Rainbow Visor"
  | "Stoned"
  | "Virtual"
  | "VR";

export type Head =
  | "Nothing"
  | "Afro"
  | "Bunny"
  | "Cap"
  | "CEO"
  | "Shark"
  | "Crown"
  | "Elf"
  | "Fez"
  | "Gamblers Hat"
  | "Monke"
  | "Ice Cream"
  | "Military Hat"
  | "Monkey Bun"
  | "Naruto"
  | "Pan"
  | "Pilot"
  | "Saka"
  | "Santa"
  | "Usanka";

export type Mouth =
  | "Nothing"
  | "Banana"
  | "Blunt"
  | "Cigar"
  | "Gold NT Mask"
  | "Green NT Mask"
  | "Jaws"
  | "Red NT Mask"
  | "Smile"
  | "Vape";

export interface CyberApe {
  background?: Background;
  ape: Ape;
  ears: Ears;
  eyes: Eyes;
  head: Head;
  mouth: Mouth;
}
