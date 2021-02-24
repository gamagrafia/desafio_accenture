import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import ErrorPage from '../pages/errorPage';
import HomePag3 from '../pages/HomePag3';
import HomePag4 from '../pages/HomePag4';
import Login from '../pages/login';
import Page2 from '../pages/page_2';
import Page5 from '../pages/page_5';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Page5} />
      <Route path="/page2" exact component={Page2} />
      <Route path="/login" component={Login} />
      <Route path="/error" component={ErrorPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/fist"  exact component={HomePag3}/>
      <Route path="/second"  component={HomePag4}/>
    </Switch>
  );
};


export default Routes;
