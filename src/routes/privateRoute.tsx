import React, { ComponentType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { isAuthenticated } from '../services/isAuth';

// Interfaces:

interface PrivateRouteProps extends RouteProps {
    component: ComponentType
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    component: Component,
    ...rest
}) => 

    (<Route
        {...rest}
        render={props => isAuthenticated()
            ?
            (<Component />)
            :
            (<Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )} 
        />
)


export default PrivateRoute;