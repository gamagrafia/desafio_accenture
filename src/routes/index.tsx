import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../pages/login'
import Page2 from '../pages/page_2'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Page2} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
