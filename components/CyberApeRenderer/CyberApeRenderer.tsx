import { NextPage } from "next";
import * as Trait from "./Traits";
import { CyberApe } from "../../types/ape-traits";
import { CyberApeRendererContainer, CyberApeTrait } from "./styles";
import { CyberApeProps } from "./types";

const CyberApeRenderer: NextPage<CyberApeProps> = ({ traits, size, isLookingRight }) => {
  return (
    <CyberApeRendererContainer size={size} isLookingRight={isLookingRight}>
      <CyberApeTrait>
        {traits.background === "Binary" && <Trait.Binary />}
        {traits.background === "Blue Plain" && <Trait.BluePlain />}
        {traits.background === "Blue Gradient" && <Trait.BlueGradient />}
        {traits.background === "Brown Gradient" && <Trait.BrownGradient />}
        {traits.background === "City" && <Trait.City />}
        {traits.background === "Cream Plain" && <Trait.CreamPlain />}
        {traits.background === "Cyber Age" && <Trait.CyberAge />}
        {traits.background === "Purple Gradient" && <Trait.PurpleGradient />}
        {traits.background === "Red Gradient" && <Trait.RedGradient />}
        {traits.background === "Violet Plain" && <Trait.VioletPlain />}
        {traits.background === "Psychedelic" && <Trait.Psychedelic />}
      </CyberApeTrait>

      <CyberApeTrait>
        {traits.ape === "Albino" && <Trait.Albino />}
        {traits.ape === "Black" && <Trait.Black />}
        {traits.ape === "Blue" && <Trait.Blue />}
        {traits.ape === "Brown" && <Trait.Brown />}
        {traits.ape === "Cyan" && <Trait.Cyan />}
        {traits.ape === "Gold" && <Trait.Gold />}
        {traits.ape === "Mutant" && <Trait.Mutant />}
        {traits.ape === "Red" && <Trait.Red />}
        {traits.ape === "Robot" && <Trait.Robot />}
        {traits.ape === "Zombie" && <Trait.Zombie />}
      </CyberApeTrait>

      <CyberApeTrait>
        {traits.eyes === "Angry Visor" && <Trait.AngryVisor />}
        {traits.eyes === "Cyborg Eye" && <Trait.CyborgEye />}
        {traits.eyes === "Cyclowear" && <Trait.Cyclowear />}
        {traits.eyes === "Metallic Visor" && <Trait.MetallicVisor />}
        {traits.eyes === "Rainbow Visor" && <Trait.RainbowVisor />}
        {traits.eyes === "Stoned" && traits.ape !== "Zombie" && traits.ape !== "Mutant" && (
          <Trait.Stoned />
        )}
        {traits.eyes === "Virtual" && <Trait.Virtual />}
        {traits.eyes === "VR" && <Trait.VR />}
      </CyberApeTrait>

      <CyberApeTrait>
        {traits.head === "Afro" && <Trait.Afro />}
        {traits.head === "Bunny" && <Trait.Bunny />}
        {traits.head === "Cap" && <Trait.Cap />}
        {traits.head === "CEO" && <Trait.CEO />}
        {traits.head === "Crown" && <Trait.Crown />}
        {traits.head === "Elf" && <Trait.Elf />}
        {traits.head === "Fez" && <Trait.Fez />}
        {traits.head === "Gamblers Hat" && <Trait.GamblersHat />}
        {traits.head === "Ice Cream" && <Trait.IceCream />}
        {traits.head === "Military Hat" && <Trait.MilitaryHat />}
        {traits.head === "Monkey Bun" && <Trait.MonkeyBun />}
        {traits.head === "Naruto" && <Trait.Naruto />}
        {traits.head === "Pan" && <Trait.Pan />}
        {traits.head === "Pilot" && <Trait.Pilot />}
        {traits.head === "Saka" && <Trait.Saka />}
        {traits.head === "Santa" && <Trait.Santa />}
        {traits.head === "Usanka" && <Trait.Usanka />}
        {traits.head === "Shark" && <Trait.Shark />}
        {traits.head === "Monke" && <Trait.Monke />}
      </CyberApeTrait>

      <CyberApeTrait>
        {traits.ears === "EarPiece" && <Trait.EarPiece />}
        {traits.ears === "Neon Earring" && <Trait.NeonEarring />}
        {traits.ears === "Silver Earring" && <Trait.SilverEarring />}
      </CyberApeTrait>

      <CyberApeTrait>
        {traits.mouth === "Banana" && <Trait.Banana />}
        {traits.mouth === "Blunt" && <Trait.Blunt />}
        {traits.mouth === "Cigar" && <Trait.Cigar />}
        {traits.mouth === "Gold NT Mask" && <Trait.GoldNTMask />}
        {traits.mouth === "Green NT Mask" && <Trait.GreenNTMask />}
        {traits.mouth === "Jaws" && <Trait.Jaws />}
        {traits.mouth === "Red NT Mask" && <Trait.RedNTMask />}
        {traits.mouth === "Smile" && <Trait.Smile />}
        {traits.mouth === "Vape" && <Trait.Vape />}
      </CyberApeTrait>
    </CyberApeRendererContainer>
  );
};

export default CyberApeRenderer;
