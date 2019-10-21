import React, { useContext } from "react";
import { Pricing } from "./StyledComponents";
import { PricingContext } from "./model/PricingContext";

export default function Price(props) {
  const [prices, setPrices] = useContext(PricingContext);
  return (
    <div>
      <Pricing>0</Pricing>
    </div>
  );
}
