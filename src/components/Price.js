import React, { useContext } from "react";
import { Pricing } from "./StyledComponents";
import { PagesContext } from "./model/PagesContext";

export default function Price(props) {
  const context = useContext(PagesContext);
  return (
    <div>
      <Pricing>{context[3]}</Pricing>
    </div>
  );
}
