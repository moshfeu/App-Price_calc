import React, { useState, createContext } from "react";
export const PricingContext = createContext();
export const PricingProvider = props => {
  const [items, setItems] = useState([]);
  return (
    <PricingContext.Provider value={[items, setItems]}>
      {props.children}
    </PricingContext.Provider>
  );
};
