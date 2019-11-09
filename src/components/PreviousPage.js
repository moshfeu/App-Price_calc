import React, { useContext } from "react";
import { PagesContext } from "./model/PagesContext";
import { Previous } from "./StyledComponents";

const PreviousPage= () => {
const [price, setPrice, history] = useContext(PagesContext);
const handleReturn = () =>{
    setPrice(price.slice(price.length));
    history.goBack();
}
return(
<Previous onClick={handleReturn}/>
)
}

export default PreviousPage;