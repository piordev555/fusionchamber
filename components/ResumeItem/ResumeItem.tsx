import { NextPage } from "next/types";
import PipeBody from "./PipeBody";
import PipeHead from "./PipeHead";
import { ResumeItemContainer } from "./styles";
import { ResumeItemProps } from "./types";
import BloomingContainer from "../BloomingContainer";
import styled, { CSSProperties } from "styled-components";

interface StepBoxProps {
  accent: CSSProperties["color"];
}

const StepBox = styled.div<StepBoxProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: "flex-start";
  gap: 0.75rem;

  height: 100%;

  & > p {
    pointer-events: none;
  }

  & > h1 {
    text-transform: uppercase;
    font-weight: normal;
    font-size: 2rem;
    line-height: 2rem;
    pointer-events: none;
    color: ${(props) => props.accent};
  }
`;

const ResumeItem: NextPage<ResumeItemProps> = ({
  accent,
  icon,
  title,
  borderImageUrl,
  description,
  pipeOrigin,
}) => {
  return (
    <ResumeItemContainer pipeOrigin={pipeOrigin}>
      <StepBox
        accent={accent}
        style={{
          height: "auto",
          aspectRatio: "1",
          padding: "0 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "20px solid",
          borderImage: `url(${borderImageUrl})`,
          borderImageSlice: "20",
        }}
      >
        {icon}
      </StepBox>
      <PipeBody accent={accent} />
      <StepBox
        accent={accent}
        style={{
          height: "auto",
          padding: "2.5rem",
          width: "100%",
          border: "20px solid",
          borderImage: `url(${borderImageUrl})`,
          borderImageSlice: "20",
        }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </StepBox>
      <PipeHead accent={accent} pipeOrigin={pipeOrigin} />
    </ResumeItemContainer>
  );
};

export default ResumeItem;
