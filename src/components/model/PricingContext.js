import React, { useState, createContext } from "react";
export const PricingContext = createContext();
export const PricingProvider = props => {
  const [prices, setPrices] = useState([]);
  return <PricingContext.Provider>{props.children}</PricingContext.Provider>;
};
