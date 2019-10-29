import React from "react";
import {
  faApple,
  faAndroid,
  faAngellist
} from "@fortawesome/free-brands-svg-icons";
import {
  InvInput,
  MainWrapper,
  MainText,
  ButtonsWrapper,
  Icon,
  SelectionsContainer,
  ButtonLabel,
  PreviousPage,
  RouteLink,
  SubButton
} from "../StyledComponents";

function Type(props) {
  return (
    <MainWrapper>
      <PreviousPage to="/">Previous Page</PreviousPage>
      <MainText>What platform you want your app to be built on?</MainText>
      <ButtonsWrapper>
        <SelectionsContainer method="POST">
          <RouteLink to="/questions/social">
            <SubButton type="submit">
              <Icon icon={faApple} />
            </SubButton>
          </RouteLink>
          <InvInput name="choice" readonly value={2000} />
          <ButtonLabel>Apple</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/questions/social">
            <Icon icon={faAndroid} />
          </RouteLink>
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
