import styled from "styled-components";

export const MobileMenuContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 300;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 1);
  backdrop-filter: blur(2.5px);

  animation: mobile-menu-fade-in 0.15s ease-in-out forwards;

  @keyframes mobile-menu-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MobileMenuContainerWrapper = styled.div`
  width: 90%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
`;

export const ComingSoonTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: normal;
  text-transform: uppercase;

  margin: 15rem 0;
`;

export const MobileMenuCloseButton = styled.button`
  background: none;
  border: none;

  position: absolute;
  right: 2rem;
  top: 1.5rem;
  z-index: 1;

  svg {
    transform: scale(1.5);

    path {
      fill: white;
    }
  }
`;

export const MobileMenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background: none;

  gap: 0.1rem;
`;

export const MenuItem = styled.a`
  text-transform: uppercase;

  font-size: 4rem;
`;

export const MobileMenuSocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  a {
    font-size: 2rem;
  }

  svg {
    width: 26px;
    height: 26px;
  }
`;

export const Twitter = styled.a`
  font-weight: normal;
  display: flex;
  gap: 1rem;
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
  gap: 1rem;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    transition: all 0.05s ease-in-out;
    color: #5865f2;
  }
`;
