import React, {useEffect, useState} from 'react';
import "./App.scss"
import FormValidation from "./FormValidation";
import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoutes from "./ProtectedRoutes";
import Index from "./Pages";

const App = () => {

    const [isAuth, setIsAuth] = useState(false)
    useEffect(()=>{
        localStorage.setItem('auth',JSON.stringify(isAuth))
    },[isAuth])

    useEffect(()=>{
        const auth = localStorage.getItem('auth')
        if(auth)
            setIsAuth(JSON.parse(auth))
    },[])

    return (
        <div className={'app'}>
            <Switch>
                <Route path={'/sign-in'} exact>
                    <FormValidation setIsAuth={setIsAuth} status={'in'}/>
                </Route>
                <Route path={'/sign-up'} exact>
                    <FormValidation setIsAuth={setIsAuth} status={'up'}/>
                </Route>
                <ProtectedRoutes path={'/main/dashboard/crypto'} component={Index} isAuth={isAuth} exact/>
                <Redirect to={'/sign-in'}/>
            </Switch>
        </div>
    );
};

export default App;