import React, { useContext, useEffect } from "react";
import TypeModel from "../model/questions.model/Type.model";
import PagesContext from "../model/PagesContext";
import {
  faApple,
  faAndroid,
  faAngellist
} from "@fortawesome/free-brands-svg-icons";
import {
  MainWrapper,
  MainText,
  ButtonsWrapper,
  Icon,
  SelectionsContainer,
  ButtonLabel,
  RouteLink
} from "../StyledComponents";
/*const [pages, setPages] = useContext(PagesContext);*/
const Type = () => {
  return (
    <MainWrapper>
      <MainText>What platform you want your app to be built on?</MainText>
      <ButtonsWrapper>
        <SelectionsContainer method="POST">
          <RouteLink to="/questions/social">
            <Icon icon={faApple} />
          </RouteLink>
          <ButtonLabel>Apple</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <Icon icon={faAndroid} />
          <ButtonLabel>Android</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/questions/social">
            <Icon icon={faAngellist} />
          </RouteLink>
          <ButtonLabel>Both</ButtonLabel>
        </SelectionsContainer>
      </ButtonsWrapper>
    </MainWrapper>
  );
};
export default Type;
