import { NextPage } from "next/types";
import CyberApeRenderer from "../CyberApeRenderer";
import {
  TeamCardContainer,
  TeamCardContent,
  TeamExperienceSpan,
  TeamNameSpan,
  TeamRoleSpan,
} from "./styles";
import { TeamCardProps } from "./types";

const TeamCard: NextPage<TeamCardProps> = ({ experience, name, role, traits }) => {
  return (
    <TeamCardContainer>
      <CyberApeRenderer size="200px" traits={traits} />

      <TeamCardContent>
        <TeamExperienceSpan>{experience} years of experience</TeamExperienceSpan>
        <TeamNameSpan>{name}</TeamNameSpan>
        <TeamRoleSpan>{role}</TeamRoleSpan>
      </TeamCardContent>
    </TeamCardContainer>
  );
};

export default TeamCard;
