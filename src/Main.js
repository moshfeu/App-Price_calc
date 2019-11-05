import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import Price from "./components/Price";
import Recap from "./components/Recap";
import Choices from "./components/questions/Choices";
import { PagesProvider } from "./components/model/PagesContext";
import { PreviousPage } from "./components/StyledComponents";
import Model from "./components/model/questions.model/Model"
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
          <Route exact path="/questions/type" component={Choices} />
        </PagesProvider>
      </div>
    </Router>
  );
}
export default Main;
