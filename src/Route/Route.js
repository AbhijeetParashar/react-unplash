import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { RoutesPath } from "../constant/constant";

import HomeLayout from "../component/HomeLayout";

const routes = () => (
  <Router>
    <Switch>
      <Route exact path={RoutesPath.HomeLayout} component={HomeLayout} />
      <Route exact path={RoutesPath.searchKeyword} component={HomeLayout} />
      <Route exact path={RoutesPath.imageView} component={HomeLayout} />
      <Redirect from="*" to={RoutesPath.HomeLayout} />
    </Switch>
  </Router>
);

export default routes;
