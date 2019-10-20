import React from "react";
import {
  faSmile,
  faFrown
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

function Logo() {
    return (
        <MainWrapper>
        <PreviousPage to='./payments'>Previous Page</PreviousPage>
      <MainText>Do you want a logo for your brand?</MainText>
      <ButtonsWrapper>
        <SelectionsContainer>
            <RouteLink to="/recap">
              <Icon icon={faSmile} />
            </RouteLink>
          <ButtonLabel>Yes</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/recap">
              <Icon icon={faFrown} />
          </RouteLink>
          <ButtonLabel>No</ButtonLabel>
        </SelectionsContainer>
      </ButtonsWrapper>
    </MainWrapper>
  );
}
export default Logo;