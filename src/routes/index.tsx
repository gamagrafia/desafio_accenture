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