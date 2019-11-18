import React, { useState, createContext } from "react";
import { useHistory } from "react-router";
export const PagesContext = createContext();
export const PagesProvider = props => {
  const history = useHistory();
  const [price, setPrice] = useState([
    {
      price: 0
    }
  ]);
  const finalPrice = price.map(value => value.price).reduce((a, b) => a + b, 0);
  return (
    <PagesContext.Provider value={[price, setPrice, history, finalPrice]}>
      {props.children}
    </PagesContext.Provider>
  );
};
