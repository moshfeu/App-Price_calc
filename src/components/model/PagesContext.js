import React, { useState, createContext } from "react";
export const PagesContext = createContext();
export const PagesProvider = props => {
  const [pages, setPages] = useState([]);
  const [prices, setPrices] = useState([]);
  return (
    <PagesContext.Provider value={[pages, setPages, prices, setPrices]}>
      {props.children}
    </PagesContext.Provider>
  );
};
