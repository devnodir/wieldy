import React from 'react';
import logo from "../images/logo.png";
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";

const FormValidation = ({setIsAuth,status}) => {


    return (
        <div className={'form-validation'}>
            <div className={'main'}>
                <div className="container">
                    <div className="left">
                        <div className="bg">
                            <div className="top">
                                <h1 className="title">Sign In</h1>
                                <p className="text">By Signing Up, you can avail full features of our services.</p>
                                <p className="text">Get an account !!!</p>
                            </div>
                            <div className="bottom">
                                <img src={logo} alt="" className="logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        {
                            status==='in'?
                                <FormSignIn setIsAuth={setIsAuth}/>
                                :<FormSignUp setIsAuth={setIsAuth}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormValidation;