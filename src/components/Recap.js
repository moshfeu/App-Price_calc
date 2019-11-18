import React, { useContext, useState } from "react";
import PreviousPage from "../components/PreviousPage";
import { PagesContext } from "./model/PagesContext";
import {
  RecapText,
  RecapWrapper,
  SubText,
  Toggle,
  RecapLabel,
  RecapIcon,
  RecapContainer,
  RecapSingleSelectionContainer
} from "./StyledComponents";

function Recap() {
  const context = useContext(PagesContext);
  const [show, setShow] = useState({ toggle: false });
  const handleShow = () => {
    setShow({ toggle: !show.toggle });
  };
  return (
    <RecapWrapper>
      <PreviousPage />
      <RecapText>Your Estimated end price is: {context[3]}€</RecapText>
      {show.toggle &&
        context[0].map(selection => (
          <RecapContainer>
            <RecapSingleSelectionContainer>
              <RecapIcon src={"/svg-icons/" + selection.icon} />
              <RecapLabel>{selection.page}</RecapLabel>
            </RecapSingleSelectionContainer>
          </RecapContainer>
        ))}
      <Toggle onClick={handleShow}>
        {show.toggle ? "(Hide Recap)" : "(Show Recap)"}
      </Toggle>
      <SubText>
        You can Contact us using the form below and we will bring life to your
        project together!
      </SubText>
    </RecapWrapper>
  );
}
export default Recap;
