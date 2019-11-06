import React, { useContext } from "react";
import { PagesContext } from "../model/PagesContext";
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
  const [price, setPrice] = useContext(PagesContext);
  const AddPrice = e => {
    setPrice([...price, e.target.price]);
  };
  return (
    <MainWrapper>
      <MainText>{pagename}</MainText>
      <ButtonsWrapper>
        {values.map(button => (
          <SelectionsContainer>
            <RouteLink to={button.next} price={button.price} onClick={AddPrice}>
              <Icon
                src={"/svg-icons/" + button.icon}
                key={button.id}
                style={{ width: "100px", height: "100px" }}
              />
            </RouteLink>
            <ButtonLabel>{button.name}</ButtonLabel>
          </SelectionsContainer>
        ))}
      </ButtonsWrapper>
    </MainWrapper>
  );
};
export default Choices;
