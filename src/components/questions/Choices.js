import React, { useContextc} from "react";
import Model from "../model/questions.model/Model";
import PagesContext from "../model/PagesContext";
import {
  MainWrapper,
  MainText,
  ButtonsWrapper,
  Icon,
  SelectionsContainer,
  ButtonLabel,
  RouteLink
} from "../StyledComponents";
const model = Model();
const Choices = () => {
  return (
    <MainWrapper>
      <MainText>{model.title}</MainText>
      <ButtonsWrapper>
        {
        model.buttons.map(button => (
        <SelectionsContainer>
          <RouteLink to={button.next}>
            <Icon src={button.icon} />
          </RouteLink>
          <ButtonLabel>{button.name}</ButtonLabel>
        </SelectionsContainer>
        ))
        }
      </ButtonsWrapper>
    </MainWrapper>
  );
};
export default Choices;
