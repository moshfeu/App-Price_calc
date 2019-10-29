import React from "react";
import {
  MainWrapper,
  ListItem,
  SelectionsContainer,
  ButtonLabel,
  ContactButton,
  PreviousPage
} from "./StyledComponents";
function Recap() {
  /*const cleanUp = () => {
    setItems(items.splice(0, items.lemgth));
  };*/
  return (
    <MainWrapper>
      <PreviousPage to="./">Restart</PreviousPage>
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
