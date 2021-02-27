import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import ErrorPage from '../pages/errorPage';
import Home from '../pages/home';
import Login from '../pages/login';
import PassRequest from '../pages/passRequest';
import RecoveryPass from '../pages/recoveryPass';
import store from '../store';
import PrivateRecoveryPass from './privateRecoveryPass';
import PrivateRoute from './privateRoute';

const Routes: React.FC = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/passRequest" component={PassRequest} />
        <PrivateRecoveryPass path="/recovery" component={RecoveryPass} />
        <Route path="/error" component={ErrorPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Provider>

  );
};



export default Routes
