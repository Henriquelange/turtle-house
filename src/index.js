import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "./views/Components/Components.js";
import LandingPage from "./views/LandingPage/LandingPage.js";
import ProfilePage from "./views/ProfilePage/ProfilePage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  // <App>
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/" component={Components} />
      </Switch>
    </Router>,
  // </App>,
  document.getElementById("root")
);


// ReactDOM.render(<App />, document.getElementById('root'));
