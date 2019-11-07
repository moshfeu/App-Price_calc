import React, { useState, createContext } from "react";
import useHistory from "react-router-dom";
export const PagesContext = createContext();
export const PagesProvider = props => {
  const [price, setPrice] = useState([]);
  return (
    <PagesContext.Provider value={[price, setPrice]}>
      {props.children}
    </PagesContext.Provider>
  );
};
