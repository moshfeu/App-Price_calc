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
        <SelectionsContainer>
          <RouteLink onClick={setPrices} to="/questions/social" price={2000}>
            <Icon icon={faApple} />
          </RouteLink>
          <ButtonLabel>Apple</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/questions/social" price={1500}>
            <Icon icon={faAndroid} />
          </RouteLink>
          <ButtonLabel>Android</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/questions/social" price={3500}>
            <Icon icon={faAngellist} />
          </RouteLink>
          <ButtonLabel>Both</ButtonLabel>
        </SelectionsContainer>
      </ButtonsWrapper>
    </MainWrapper>
  );
}
export default Type;
