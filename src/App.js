import React, {useEffect} from 'react';
import "./App.scss"
import FormValidation from "./FormValidation";
import {Switch, Route, useHistory} from 'react-router-dom'
import ProtectedRoutes from "./ProtectedRoutes";
import Index from "./Pages";
import {connect} from "react-redux";
import {setIsAuth,getTokenCheck} from "./Redux/Reducer";
import axios from "axios";

const App = ({isAuth, setIsAuth,tokenStatus,getTokenCheck}) => {

    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('userToken')
        if(token){
            axios.get('http://143.198.173.194/main/dashboard/crypto',{
                headers:{'Authorization': token}
            }).then(res=>{
                const statusToken = res.data.ok
                if(statusToken){
                    setIsAuth(true)
                    history.push('/main/dashboard/crypto')
                }
            }).catch(err=>{
                history.push('/sign-in')
                console.log('11')
            })
        }else {
            history.push('/sign-in')
        }
    })

    return (
        <div className={'app'}>
            <Switch>
                <ProtectedRoutes path={'/main/dashboard/crypto'} component={Index} isAuth={isAuth}/>
                <Route path={'/sign-in'}>
                    <FormValidation setIsAuth={setIsAuth} status={'in'}/>
                </Route>
                <Route path={'/sign-up'}>
                    <FormValidation setIsAuth={setIsAuth} status={'up'}/>
                </Route>
            </Switch>
        </div>
    );
};

export default connect(({Reducer: {isAuth,tokenStatus}}) => ({isAuth,tokenStatus}), {setIsAuth,getTokenCheck})(App);