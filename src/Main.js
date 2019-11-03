import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import Social from "./components/questions/Social";
import Payments from "./components/questions/Payments";
import Logo from "./components/questions/Logo";
import Price from "./components/Price";
import Recap from "./components/Recap";
import Type from "./components/questions/Type";
import { PagesProvider } from "./components/model/PagesContext";
import { PreviousPage } from "./components/StyledComponents";

function Main() {
  
  return (
    <Router>
      <div>
        <PagesProvider>
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/recap" component={Recap} />
          <Route
            path="/questions/"
            render={() => {
              return (
                <>
                  <Price />
                  <PreviousPage />
                </>
              );
            }}
          />
          <Route exact path="/questions/type" component={Type} />
          <Route exact path="/questions/social" component={Social} />
          <Route exact path="/questions/payments" component={Payments} />
          <Route exact path="/questions/logo" component={Logo} />
        </PagesProvider>
      </div>
    </Router>
  );
}
export default Main;
