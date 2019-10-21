import React, { useContext } from "react";
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

function Type() {
  const [prices, setPrices] = useContext(PricingContext);
  const AddPrice = e => {
    /* setPrices(prevPrices => [...prevPrices, e.target.price])*/
  };
  return (
    <MainWrapper>
      <PreviousPage to="/">Previous Page</PreviousPage>
      <MainText>What platform you want your app to be built on?</MainText>
      <ButtonsWrapper>
        <SelectionsContainer>
          <RouteLink
            onClick={AddPrice}
            to="/questions/social"
            price={prices[0].price}
          >
            <Icon icon={faApple} />
          </RouteLink>
          <ButtonLabel>Apple</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/questions/social" onClick={AddPrice} price={1500}>
            <Icon icon={faAndroid} />
          </RouteLink>
          <ButtonLabel>Android</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/questions/social" onClick={AddPrice} price={3500}>
            <Icon icon={faAngellist} />
          </RouteLink>
          <ButtonLabel>Both</ButtonLabel>
        </SelectionsContainer>
      </ButtonsWrapper>
    </MainWrapper>
  );
}
export default Type;
