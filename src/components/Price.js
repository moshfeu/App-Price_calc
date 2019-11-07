import React, { useContext } from "react";
import { Pricing } from "./StyledComponents";
import { PagesContext } from "./model/PagesContext";

export default function Price(props) {
  const [price] = useContext(PagesContext);
  const finalPrice = 4;
  return (
    <div>
      <Pricing>{finalPrice}</Pricing>
    </div>
  );
}
