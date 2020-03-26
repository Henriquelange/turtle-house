import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Components from "./views/Components/Components.js";
import LandingPage from "./views/LandingPage/LandingPage.js";
import HomePage from "./views/HomePage/HomePage.js";
import ProfilePage from "./views/ProfilePage/ProfilePage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import UnderConstructionPage from "./views/UnderConstructionPage/UnderConstructionPage.js";

import "./assets/scss/material-kit-react.scss?v=1.8.0";

var hist = createBrowserHistory();

const App = () => (<Router history={hist}>
    <Switch>
      <Route path="/components" component={Components} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/landing" component={LandingPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/" component={UnderConstructionPage} />
    </Switch>
  </Router>
)

export default App;
