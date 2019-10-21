import React, { useState, useContext } from "react";
import { PricingContext } from "../model/PricingContext";
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
  const [prices, setPrices] = useState([2000, 1500, 0]);
  const [items, setItems] = useContext(PricingContext);
  const AddPrice = e => {
    setItems(previousItems => [...previousItems, 2000]);
  };
  return (
    <MainWrapper>
      <PreviousPage to="/">Previous Page</PreviousPage>
      <MainText>What platform you want your app to be built on?</MainText>
      <ButtonsWrapper>
        <SelectionsContainer>
          <RouteLink onClick={AddPrice} to="/questions/social">
            <Icon icon={faApple} />
          </RouteLink>
          <ButtonLabel>Apple</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink
            to="/questions/social"
            onClick={AddPrice}
            price={prices[1]}
          >
            <Icon icon={faAndroid} />
          </RouteLink>
          <ButtonLabel>Android</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink
            to="/questions/social"
            onClick={AddPrice}
            price={prices[2]}
          >
            <Icon icon={faAngellist} />
          </RouteLink>
          <ButtonLabel>Both</ButtonLabel>
        </SelectionsContainer>
      </ButtonsWrapper>
    </MainWrapper>
  );
}
export default Type;
