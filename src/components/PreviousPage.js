import React, { useContext } from "react";
import { PagesContext } from "./model/PagesContext";
import { Previous } from "./StyledComponents";

const PreviousPage= () => {
const [price, setPrice, history] = useContext(PagesContext);
const handleReturn = () =>{
    setPrice(price.slice(0, price.length-1));
    history.goBack();
}
return(
<Previous onClick={handleReturn}>Previous Page</Previous>
)
}

export default PreviousPage;