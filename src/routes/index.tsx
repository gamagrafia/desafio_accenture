import React from 'react'

import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";

import RecoveryPass from "../pages/recoveryPass";



const Routes: React.FC = () => {
    
    return (
        <Switch>
            <Route path="/" exact component={Home}/>            
            <Route path="/recoveryPass" component={RecoveryPass}/>            
        </Switch>
    )
}

export default Routes