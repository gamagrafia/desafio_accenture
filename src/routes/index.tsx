<<<<<<< HEAD
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import ErrorPage from '../pages/errorPage';
import Login from '../pages/login';
import Page2 from '../pages/page_2';
import Page5 from '../pages/page_5'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Page5} />
      <Route path="/page2" exact component={Page2} />
      <Route path="/login" component={Login} />
      <Route path="/error" component={ErrorPage} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};


export default Routes;
=======
import React from 'react'

import { Switch, Route } from "react-router-dom";

import PrivateRoute from './privateRoute'

import Home from "../pages/home";
import Login from "../pages/login";
import Error from "../pages/error";
import RecoveryPass from "../pages/recoveryPass";
import DashBoard from "../pages/dashBoard";


const Routes: React.FC = () => {
    
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/error" component={Error}/>
            <Route path="/recoveryPass" component={RecoveryPass}/>
            <PrivateRoute path="/dashboard" component={DashBoard}/>
        </Switch>
    )
}

export default Routes
>>>>>>> 7cad1faf199bd5033c36cc35791c19e9fee3d478
