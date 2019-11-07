import React, { useState, createContext } from "react";
import { useHistory } from "react-router";
export const PagesContext = createContext();
export const PagesProvider = props => {
  const history = useHistory();
  const [price, setPrice] = useState([]);
  return (
    <PagesContext.Provider value={[price, setPrice, history]}>
      {props.children}
    </PagesContext.Provider>
  );
};
