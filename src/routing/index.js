import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { 
  LoginLayout,
  Landing,
  RoutingDashboard
} from '../features/dashboard';

function RoutingRoot() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={RoutingDashboard}></Route>
        <Route path="/landing" component={Landing}></Route>
        <Route path="/login" component={LoginLayout} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    </Router>
  )
}

export {
  RoutingRoot
}

