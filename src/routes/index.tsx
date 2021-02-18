import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Cadastro from '../pages/cadastro/cadastro';
import Login from '../pages/cadastro/login'

const Routes: React.FC = () => {
  return (
    
    <Switch>
      <Route path="/" exact component={Cadastro}/>
      <Route path="/login" exact component={Login}/>
    </Switch>
    
    
    
  );
}

export default Routes;