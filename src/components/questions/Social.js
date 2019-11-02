import React from "react";
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
  RouteLink
} from "../StyledComponents";

function Social() {
  return (
    <MainWrapper>
      <MainText>Do you want your App to be connected to Socials?</MainText>
      <ButtonsWrapper>
        <SelectionsContainer>
          <RouteLink to="/questions/payments">
            <Icon icon={faThumbsUp} />
          </RouteLink>
          <ButtonLabel>Yes</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/questions/payments">
            <Icon icon={faThumbsDown} />
          </RouteLink>
          <ButtonLabel>No</ButtonLabel>
        </SelectionsContainer>
        <SelectionsContainer>
          <RouteLink to="/questions/payments">
            <Icon icon={faArrowsAltH} />
          </RouteLink>
          <ButtonLabel>I don't know</ButtonLabel>
        </SelectionsContainer>
      </ButtonsWrapper>
    </MainWrapper>
  );
}
export default Social;
