import React, { useContext } from "react";
import { PricingContext } from "../model/PricingContext";
import {
  faThumbsUp,
  faThumbsDown,
  faArrowsAltH
} from "@fortawesome/free-solid-svg-icons";
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

function Social() {
  const [prices, setPrices] = useContext(PricingContext);
  const AddPrice = e => {
    setPrices(prevPrices => [...prevPrices, e.target.price]);
  };
  return (
    <MainWrapper>
      <PreviousPage to="./type">Previous Page</PreviousPage>
      <MainText>Do you want your App to be connected to Socials?</MainText>
      <ButtonsWrapper>
        <SelectionsContainer>
          <RouteLink to="/questions/payments" onClick={AddPrice} price={1000}>
            <Icon icon={faThumbsUp} />
          </RouteLink>
          <ButtonLabel>Yes</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/questions/payments" price={0}>
            <Icon icon={faThumbsDown} />
          </RouteLink>
          <ButtonLabel>No</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/questions/payments" price={0}>
            <Icon icon={faArrowsAltH} />
          </RouteLink>
          <ButtonLabel>I don't know</ButtonLabel>
        </SelectionsContainer>
      </ButtonsWrapper>
    </MainWrapper>
  );
}
export default Social;
