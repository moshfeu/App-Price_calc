import React from "react";
/*import PagesContext from "../model/PagesContext";*/
import {
  MainWrapper,
  MainText,
  ButtonsWrapper,
  Icon,
  SelectionsContainer,
  ButtonLabel,
  RouteLink
} from "../StyledComponents";

const Choices = ({pagename, values}) => {
  return (
    <MainWrapper>
      <MainText>{pagename}</MainText>
      <ButtonsWrapper>
        {
        values.map(button=>(
        <SelectionsContainer>
          <RouteLink to={button.next}>
            <Icon src={button.icon} key={button.id}/>
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
