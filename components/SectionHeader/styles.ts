import styled from "styled-components";
import { TitleProps } from "./types";

export const SectionHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.h1<TitleProps>`
  text-align: center;
  text-transform: uppercase;
  color: white;
  font-size: ${(props) => (props.isBigTitle ? "5rem" : "3.5rem")};
  font-weight: normal;
`;

export const Description = styled.p`
  text-align: center;
  color: #595959;
  font-size: 1.25rem;

  max-width: 1100px;

  > a {
    color: white;
  }
`;
