import React, { useContext } from "react";
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

const Choices = ({ pagename, values }) => {
  const { price, setPrice } = useContext(PagesContext);
  const AddPrice = e => {
    setPrice([e.target.price, ...price]);
  };
  return (
    <MainWrapper>
      <MainText>{pagename}</MainText>
      <ButtonsWrapper>
        {
        values.map(button=>(
        <SelectionsContainer>
          <RouteLink to={button.next} onClick={AddPrice}>
            <Icon src={button.icon} key={button.id} price={button.price}/>
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
