import React from "react";
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
  PreviousPage,
  RouteLink
} from "../StyledComponents";

function Type(props) {
  return (
    <MainWrapper>
      <PreviousPage to="/">Previous Page</PreviousPage>
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
}
export default Type;
