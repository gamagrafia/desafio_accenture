import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import ErrorPage from '../pages/errorPage';
import Home from '../pages/home';
import HomePag3 from '../pages/HomePag3';
import HomePag4 from '../pages/HomePag4';
import Login from '../pages/login';
import Page2 from '../pages/page_2';
import Page5 from '../pages/page_5';
import RecoveryPass from '../pages/recoveryPass';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/page5" component={Page5} />
      <Route path="/page2" exact component={Page2} />
      <Route path="/login" component={Login} />
      <Route path="/error" component={ErrorPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/fist"  exact component={HomePag3}/>
      <Route path="/second"  component={HomePag4}/>
      <Route path="/" exact component={Home}/>            
      <Route path="/recoveryPass" component={RecoveryPass}/>  
    </Switch>
  );
};



export default Routes
