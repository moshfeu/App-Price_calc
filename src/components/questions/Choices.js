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

const Choices = ({ pagename, values }) => {
  const [price, setPrice, history] = useContext(PagesContext);
  const arrayCheck = obj => {
    if (obj.url !== history.location.pathname) return true;
  };

  const AddPrice = e => {
    values.forEach(element => {
      const newState = price.filter(arrayCheck);
      if (element.id === e.target.id) {
        setPrice([
          ...newState,
          {
            url: history.location.pathname.replace("/edit", ""),
            icon: element.icon,
            price: element.price,
            id: element.id,
            name: element.name,
            page: pagename
          }
        ]);
        history.push(element.next);
        console.log(price);
      }
    });
  };
  return (
    <MainWrapper>
      <MainText>{pagename}</MainText>
      <ButtonsWrapper>
        {values.map(button => (
          <SelectionsContainer key={button.id}>
            <Icon
              onClick={AddPrice}
              src={"/svg-icons/" + button.icon}
              id={button.id}
            />
            <ButtonLabel>{button.name}</ButtonLabel>
          </SelectionsContainer>
        ))}
      </ButtonsWrapper>
    </MainWrapper>
  );
};
export default Choices;
