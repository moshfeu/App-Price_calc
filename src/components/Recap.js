import React, { useContext } from "react";
import { PagesContext } from "./model/PagesContext";


function Recap() {
  const [price, setPrice, history]=useContext(PagesContext);
  const cleanUp = () => {
    setPrice(price.slice(0));
    history.push("/");
  }; 
  return (
      <button onClick={cleanUp}>Restart</button>
      
  );
}
export default Recap;
