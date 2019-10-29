import React, { useState, createContext } from "react";
export const PagesContext = createContext();
export const PagesProvider = props => {
  const [items, setItems] = useState([]);
  const [history, setHistory] = useState([]);
  return (
    <PagesContext.Provider value={[items, setItems, history, setHistory]}>
      {props.children}
    </PagesContext.Provider>
  );
};
