import React from 'react';
import {Route} from 'react-router-dom'

const ProtectedRoutes = ({isAuth, component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => {
            if (isAuth) {
                return <Component/>
            }
            // else {
            //     return <Redirect to={{pathname: '/sign-in', state: {from: props.location}}}/>
            // }

        }
        }/>
    );
};

export default ProtectedRoutes;