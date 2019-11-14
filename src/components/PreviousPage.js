import React, { useContext } from "react";
import { PagesContext } from "./model/PagesContext";
import { Previous } from "./StyledComponents";

const PreviousPage = props => {
  const [price, setPrice, history] = useContext(PagesContext);
  const handleReturn = () => {
    setPrice(price.slice(0, price.length - 1));
    history.goBack();
  };
  const handleCleanUp = () => {
    history.push("/");
    setPrice(price.slice(price.length));
  };

  if (
    history.location.pathname !== "/questions/type" ||
    history.location.pathname !== "/recap"
  ) {
    return <Previous onClick={handleReturn} />;
  }
  return <Previous restart onClick={handleCleanUp} />;
};

export default PreviousPage;
