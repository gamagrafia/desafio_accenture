import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import ErrorPage from '../pages/errorPage';
import Home from '../pages/home';
import Login from '../pages/login';
import PassRequest from '../pages/passRequest';
import RecoveryPass from '../pages/recoveryPass';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/page5" component={Page5} />
      <Route path="/page2" exact component={Page2} /> */}
      <Route path="/login" component={Login} />
      <Route path="/error" component={ErrorPage} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route path="/first" exact component={HomePag3} />
      <Route path="/second" component={HomePag4} /> */}
      <Route path="/passrequest" component={PassRequest} />

      <Route path="/recoveryPass" component={RecoveryPass} />
    </Switch>
  );
};



export default Routes
