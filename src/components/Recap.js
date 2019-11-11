import React, { useContext } from "react";
import { PagesContext } from "./model/PagesContext";
import Price from "../components/Price";

function Recap() {
  const history = useContext(PagesContext);
  const cleanUp = () => {
    history[2].push("/");
    window.location.reload(false);
  };
  return (
    <>
      <Price />
      <button
        style={{ width: "100px", height: "100px", color: "white" }}
        onClick={cleanUp}
      >
        Restart
      </button>
    </>
  );
}
export default Recap;
