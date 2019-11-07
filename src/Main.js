import React from "react";
import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import Price from "./components/Price";
import Recap from "./components/Recap";
import Choices from "./components/questions/Choices";
import { PagesProvider } from "./components/model/PagesContext";
import { PreviousPage } from "./components/StyledComponents";
import Model from "./components/model/questions.model/Model";

function Main(props) {
  const model = Model();
  return (
    <Router>
      <div>
        <PagesProvider>
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/recap" component={Recap} />
          {model.map(choice => (
            <Route
              id={uuid()}
              exact
              path={`/questions/${choice.name}`}
              render={props => (
                <>
                  <Choices
                    values={choice.values}
                    pagename={choice.title}
                    id={choice.id}
                  />
                  <Price />
                  <PreviousPage />
                </>
              )}
            />
          ))}
        </PagesProvider>
      </div>
    </Router>
  );
}
export default Main;
