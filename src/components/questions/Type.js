import React, { useContext} from "react";
import TypeModel from "../model/questions.model/Type.model";
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
const model = TypeModel();
const Type = () => {
  return (
    /*Will be generated from the model later, now it is hardcoded*/
    <MainWrapper>
      <MainText>{model.title}</MainText>
      <ButtonsWrapper>
        {
        model.buttons.map(button => (
        <SelectionsContainer>
          <RouteLink to={button.next}>
            <Icon icon={button.icon} />
          </RouteLink>
          <ButtonLabel>{button.name}</ButtonLabel>
        </SelectionsContainer>
        ))
        }
      </ButtonsWrapper>
    </MainWrapper>
  );
};
export default Type;
