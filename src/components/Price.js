import React, { useContext } from "react";
import { Pricing } from "./StyledComponents";
import { PricingContext } from "./model/PricingContext";

export default function Price(props) {
  const [items, setItems] = useContext(PricingContext);
  const finalPrice = items.reduce((a, b) => a + b, 0);
  return (
    <div>
      <Pricing>{finalPrice}</Pricing>
    </div>
  );
}
