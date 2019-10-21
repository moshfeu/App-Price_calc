import React, { useState, createContext } from "react";
export const PricingContext = createContext();
export const PricingProvider = props => {
  const [prices, setPrices] = useState([
    {
      name: "Apple",
      price: 2000
    }
  ]);
  return (
    <PricingContext.Provider value={[prices, setPrices]}>
      {props.children}
    </PricingContext.Provider>
  );
};
