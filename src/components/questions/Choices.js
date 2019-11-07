import React, { useContext } from "react";
import { PagesContext } from "../model/PagesContext";
import {
  MainWrapper,
  MainText,
  ButtonsWrapper,
  Icon,
  SelectionsContainer,
  ButtonLabel
} from "../StyledComponents";
import { useHistory } from "react-router";

const Choices = ({ pagename, values }) => {
  const history = useHistory();
  const [price, setPrice] = useContext(PagesContext);
  const AddPrice = e => {
    values.forEach(element => {
      if (element.id === e.target.id) {
        setPrice([
          ...price,
          { price: element.price, url: history.location.pathname }
        ]);
        history.push(element.next);
      }
    });
  };
  return (
    <MainWrapper>
      <MainText>{pagename}</MainText>
      <ButtonsWrapper>
        {values.map(button => (
          <SelectionsContainer>
            <Icon
              onClick={AddPrice}
              src={"/svg-icons/" + button.icon}
              id={button.id}
              style={{ width: "100px", height: "100px" }}
            />
            <ButtonLabel>{button.name}</ButtonLabel>
          </SelectionsContainer>
        ))}
      </ButtonsWrapper>
    </MainWrapper>
  );
};
export default Choices;
