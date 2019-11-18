import React, { useContext } from "react";
import {
  CoverImage,
  FrontWrapper,
  MainTitle,
  SubText,
  StartButton
} from "./StyledComponents";
import { PagesContext } from "./model/PagesContext";

const Frontpage = () => {
  const context = useContext(PagesContext);
  const handleStart = () => {
    context[2].push("/questions/type");
  };
  return (
    <FrontWrapper>
      <CoverImage />
      <MainTitle>Do you want to know how much an app will cost you?</MainTitle>
      <SubText> If the answer is YES, click on the start button below!</SubText>
      <StartButton onClick={handleStart}>Start!</StartButton>
    </FrontWrapper>
  );
};
export default Frontpage;
