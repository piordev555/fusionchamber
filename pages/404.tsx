import { NextPage } from "next/types";
import GlobalHeader from "../components/GlobalHeader";
import { HomeContainer, NotFoundContainer } from "../styles/Home";

const Custom404: NextPage = () => {
  return (
    <HomeContainer>
      <GlobalHeader />
      <NotFoundContainer>404 PAGE NOT FOUND</NotFoundContainer>
    </HomeContainer>
  );
};

export default Custom404;
