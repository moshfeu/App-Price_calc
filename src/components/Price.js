import React, { useContext } from "react";
import { Pricing } from "./StyledComponents";
import { PagesContext } from "./model/PagesContext";

export default function Price(props) {
  const [items, setItems] = useContext(PagesContext);
  const finalPrice = items.reduce((a, b) => a + b, 0);
  return (
    <div>
      <Pricing>{finalPrice}</Pricing>
    </div>
  );
}
