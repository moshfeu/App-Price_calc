import React, { useContext } from "react";
import { Pricing } from "./StyledComponents";
import { PagesContext } from "./model/PagesContext";

export default function Price(props) {
  const price = useContext(PagesContext);
  const midPrice = price.map((value) =>(value.price));
  const finalPrice = midPrice.reduce((a,b) => a + b, 0);
  console.log(midPrice);
  return (
    <div>
      <Pricing>{finalPrice}</Pricing>
    </div>
  );
}
