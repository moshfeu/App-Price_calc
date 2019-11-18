import React, { useContext } from "react";
import { PagesContext } from "./model/PagesContext";
import { Previous, Restart } from "./StyledComponents";

const PreviousPage = props => {
  const [price, setPrice, history] = useContext(PagesContext);
  const handleReturn = () => {
    history.goBack();
    setPrice(price.filter(obj => obj.url !== history.location.pathname));
  };
  const handleCleanUp = () => {
    history.push("/");
    setPrice(price.slice(price.length));
  };

  if (
    history.location.pathname !== "/questions/type" &&
    history.location.pathname !== "/recap"
  ) {
    return <Previous onClick={handleReturn} />;
  }
  return <Restart onClick={handleCleanUp} />;
};
export default PreviousPage;
