import React, { useContext } from "react";
import { PagesContext } from "./model/PagesContext";
import { whileStatement } from "@babel/types";


function Recap() {
  const [price, setPrice, history]=useContext(PagesContext);
  const cleanUp = () => {
    setPrice(price.slice(0));
    history.push("/");
  }; 
  return (
      <button  style={{ width: "100px", height: "100px", color: "white"}} onClick={cleanUp}>Restart</button>
      
  );
}
export default Recap;
