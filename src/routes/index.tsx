import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorPage from '../pages/errorPage';
import Login from '../pages/login';
import Page2 from '../pages/page_2';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Page2} />
      <Route path="/login" component={Login} />
      <Route path="/error" component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
