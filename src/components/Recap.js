import React, { useContext } from "react";
import Price from "../components/Price";
import PreviousPage from "../components/PreviousPage";
import { PagesContext } from "./model/PagesContext";

function Recap() {
  const context = useContext(PagesContext);
  return (
    <>
      <PreviousPage />
      <Price />
    </>
  );
}
export default Recap;
