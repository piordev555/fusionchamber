import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  gap: 0.25rem;

  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: normal;
`;

export const SocialsWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
`;

export const Twitter = styled.a`
  font-weight: normal;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    transition: all 0.05s ease-in-out;
    color: #1da1f2;
  }
`;

export const Discord = styled.a`
  font-weight: normal;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    transition: all 0.05s ease-in-out;
    color: #5865f2;
  }
`;
