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
    setPrice([e.target.id, ...price]);
  };
  return (
    <MainWrapper>
      <MainText>{pagename}</MainText>
      <ButtonsWrapper>
<<<<<<< HEAD
        {
        values.map(button=>(
        <SelectionsContainer>
          <RouteLink to={button.next}>
            <Icon src={button.icon} key={button.id} price={button.price}/>
          </RouteLink>
          <ButtonLabel>{button.name}</ButtonLabel>
        </SelectionsContainer>
          ))
        }
=======
        {values.map(button => (
          <SelectionsContainer>
            <RouteLink
              onClick={AddPrice()}
              to={button.next}
              price={button.price}
            >
              <Icon src={button.icon} key={button.id} />
            </RouteLink>
            <ButtonLabel>{button.name}</ButtonLabel>
          </SelectionsContainer>
        ))}
>>>>>>> c75748ac2fecbb8f13b779d9c74c406cab23194b
      </ButtonsWrapper>
    </MainWrapper>
  );
};
export default Choices;
