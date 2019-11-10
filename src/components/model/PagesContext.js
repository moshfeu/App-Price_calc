import React, { useState, createContext } from "react";
import { useHistory } from "react-router";
export const PagesContext = createContext();
export const PagesProvider = props => {
  const history = useHistory();
  // You need to initialize the price the same way you will set it later - https://github.com/iDome89/App-Price_calc/blob/0928cd0283db7cda3e1f66b5c6244712e2c20ee5/src/components/questions/Choices.js#L19
  const [price, setPrice] = useState([{
    price: 0
  }]);
  return (
    <PagesContext.Provider value={[price, setPrice, history]}>
      {props.children}
    </PagesContext.Provider>
  );
};
