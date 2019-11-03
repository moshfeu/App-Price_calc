import React, { useState, createContext } from "react";
export const PagesContext = createContext();
export const PagesProvider = props => {
  const [prices, setPrices] = useState([]);
  return (
    <PagesContext.Provider value={[prices, setPrices]}>
      {props.children}
    </PagesContext.Provider>
  );
};
