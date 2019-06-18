import React from "react";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import {
  DashboardRequests
} from './components';

function RoutingDashboard(prop) {
  const { match: { path } } = prop;

  return (
    <Switch>
      <Route exact path={`${path}/request`} component={DashboardRequests}></Route>
      <Redirect exact from={`${path}`} to={`${path}/request`} />
    </Switch>
  )
}

export {
  RoutingDashboard
}

