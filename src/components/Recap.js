import React, { useContext, useState } from "react";
import PreviousPage from "../components/PreviousPage";
import { PagesContext } from "./model/PagesContext";
import { RecapText, RecapWrapper, SubText, Toggle } from "./StyledComponents";

function Recap() {
  const context = useContext(PagesContext);
  const [show, setShow] = useState({
    show: true
  });
  return (
    <RecapWrapper>
      <PreviousPage />
      <RecapText>Your Estimated end price is: {context[3]}€</RecapText>
      <Toggle>(Show Recap)</Toggle>
      <SubText>
        You can Contact us using the form below to bring life to your project!{" "}
      </SubText>
    </RecapWrapper>
  );
}
export default Recap;
