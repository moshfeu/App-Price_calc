import React, { useContext } from "react";
import { Pricing } from "./StyledComponents";
import { PagesContext } from "./model/PagesContext";

export default function Price(props) {
  const context = useContext(PagesContext);
  // price is basically the array [price, setPrice, history], so you probably want the first item
  const midPrice = context[0].map(value => value.price);
  const finalPrice = midPrice.reduce((a, b) => a + b, 0);
  return (
    <div>
      <Pricing>{finalPrice}</Pricing>
    </div>
  );
}
