import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// CSS
import "./css/LandingPage.css";

// Views
import LandingPage from "./views/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

const appDiv = document.getElementById("app");

render(<App />, appDiv);
