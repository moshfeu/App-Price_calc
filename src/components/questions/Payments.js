import React from "react";
import {
  faArrowsAltH
} from "@fortawesome/free-solid-svg-icons";
import {
    faCcMastercard,
    faCreativeCommonsNcEu
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

function Payments() {
    return (
        <MainWrapper>
        <PreviousPage to='./social'>Previous Page</PreviousPage>
      <MainText>Do you want in-App purchases?</MainText>
      <ButtonsWrapper>
        <SelectionsContainer>
            <RouteLink to="/questions/logo" price={4000}>
              <Icon icon={faCcMastercard} />
            </RouteLink>
          <ButtonLabel>Yes</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/questions/logo" price={0}>
              <Icon icon={faCreativeCommonsNcEu} />
          </RouteLink>
          <ButtonLabel>No</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
            <RouteLink to="/questions/logo" price={0}>
              <Icon icon={ faArrowsAltH} />
          </RouteLink>
          <ButtonLabel>I don't know</ButtonLabel>
        </SelectionsContainer>
      </ButtonsWrapper>
    </MainWrapper>
  );
}
export default Payments;
