import React from 'react';
import{Route,Switch} from 'react-router-dom';
import HomePag3 from '../pages/HomePag3';
import HomePag4 from '../pages/HomePag4';

const Routes: React.FC = () => {
  return (
    <Switch>
    <Route path="/fist"  exact component={HomePag3}/>
    <Route path="/second"  component={HomePag4}/>
    </Switch>
  );
}

export default Routes;