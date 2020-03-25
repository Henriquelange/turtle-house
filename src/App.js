import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Components from "./views/Components/Components.js";
import LandingPage from "./views/LandingPage/LandingPage.js";
import ProfilePage from "./views/ProfilePage/ProfilePage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";

import "./assets/scss/material-kit-react.scss?v=1.8.0";

var hist = createBrowserHistory();

const App = () => (<Router history={hist}>
    <Switch>
      <Route path="/components" component={Components} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
)

export default App;
