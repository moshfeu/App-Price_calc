import React from "react";
import {
  MainWrapper,
  ListItem,
  SelectionsContainer,
  ButtonLabel,
  ContactButton,
} from "./StyledComponents";
function Recap() {
  /*const cleanUp = () => {
    setPrice(price.splice(0, price.lemgth));
  };*/
  return (
    <MainWrapper>
      <SelectionsContainer>
        <ListItem>Platform of choice :</ListItem>
        <ButtonLabel>€</ButtonLabel>
      </SelectionsContainer>
      <SelectionsContainer>
        <ListItem>Social Networks :</ListItem>
        <ButtonLabel>€</ButtonLabel>
      </SelectionsContainer>
      <SelectionsContainer>
        <ListItem>In-App Payments :</ListItem>
        <ButtonLabel>€</ButtonLabel>
      </SelectionsContainer>
      <SelectionsContainer>
        <ListItem>Brand Logo :</ListItem>
        <ButtonLabel>€</ButtonLabel>
      </SelectionsContainer>
      <ContactButton>Contact us!</ContactButton>
    </MainWrapper>
  );
}
export default Recap;
