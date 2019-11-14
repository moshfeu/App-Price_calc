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
  const checker = price.some(item => item.url === history.location.pathname);
  const AddPrice = e => {
    values.forEach(element => {
      if (element.id === e.target.id && !checker) {
        setPrice([
          ...price,
          { price: element.price, url: history.location.pathname }
        ]);
        history.push(element.next);
      } /*else {
        setPrice(
          price.forEach(obj => {
            if (checker && element.id === e.target.id)
              obj.price = element.price;
          })
        );
        history.push(element.next);
      }*/
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
