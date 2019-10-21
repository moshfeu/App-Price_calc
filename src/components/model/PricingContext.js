import React, { useState, createContext } from "react";
export const PricingContext = createContext();
export const PricingProvider = props => {
  const [items, setItems] = useState([
    {
      totalPrice: [],
      firstChoice: [
        { name: "Apple", price: 2000 },
        { name: "Android", price: 1500 },
        { name: "Both", price: 3500 }
      ],
      secondChoice: [
        { name: "Yes", price: 2400 },
        { name: "No", price: 0 },
        { name: "Idk", price: 0 }
      ]
    }
  ]);
  return (
    <PricingContext.Provider value={[items, setItems]}>
      {props.children}
    </PricingContext.Provider>
  );
};
