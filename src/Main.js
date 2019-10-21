import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import Type from "./components/questions/Type";
import Social from "./components/questions/Social";
import Payments from "./components/questions/Payments";
import Logo from "./components/questions/Logo";
import Price from "./components/Price";
import Recap from "./components/Recap";
import { PricingProvider } from "./components/model/PricingContext";

function Main() {
  return (
    <Router>
      <div>
        <PricingProvider>
          <Route path="/questions/" component={Price} />
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/questions/type" component={Type} />
          <Route exact path="/questions/social" component={Social} />
          <Route exact path="/questions/payments" component={Payments} />
          <Route exact path="/questions/logo" component={Logo} />
          <Route exact path="/recap" component={Recap} />
        </PricingProvider>
      </div>
    </Router>
  );
}
export default Main;
