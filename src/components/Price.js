import React, { useContext } from "react";
import { Pricing } from "./StyledComponents";
import { PagesContext } from "./model/PagesContext";

export default function Price(props) {
  const context = useContext(PagesContext);
  const midPrice = context[0].map(value => value.price);
  const finalPrice = midPrice.reduce((a, b) => a + b, 0);

  return (
    <div>
      <Pricing>{finalPrice}</Pricing>
    </div>
  );
}
