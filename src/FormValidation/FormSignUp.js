import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import AlertForm from "./AlertForm";
import {FaFacebook, FaGithub, FaGoogle, FaTwitter} from "react-icons/all";
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {postCreateUser, createUser} from "../Redux/Reducer";
import {connect} from "react-redux";
import {Beetle as Button} from 'react-button-loaders'

const FormSignIn = ({postCreateUser, newUser, createUser}) => {

    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorUser, setErrorUser] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [statusAlert, setStatusAlert] = useState(null)
    const [loading, setLoading] = useState('')
    const history = useHistory()

    useEffect(() => {
        if (newUser) {
            if(newUser.ok){
                setStatusAlert(true)
                setAlertText('Successfully')
                setAlert(true)
                setLoading('finished')
                setTimeout(() => {
                    history.push('/sign-in')
                }, 500)
            }else{
                setStatusAlert(false)
                setAlertText(newUser.message)
                setAlert(true)
                setLoading('')
            }
        }
        createUser(null)
    }, [newUser,createUser,history])

    const formSubmit = (e) => {
        e.preventDefault()
        const userValue = e.target.children[0].children[0].value
        const emailValue = e.target.children[1].children[0].value
        const passwordValue = e.target.children[2].children[0].value

        if (!userValue || !/^[a-zA-Z]*$/.test(userValue) || userValue.length < 5) {
            setErrorUser(true)
            return;
        } else if (!emailValue || !emailValue.includes('@') || !emailValue.includes('.')) {
            setErrorEmail(true)
            return;
        } else if (!passwordValue || passwordValue.length < 6) {
            setErrorPassword(true)
            return;
        }


        setLoading('loading')
        postCreateUser({
            fullname: userValue,
            email: emailValue,
            password: passwordValue
        })


    }

    const errorFunc = (e, name) => {
        let value = e.target.value

        if (name === 'user') {
            if (!value) {
                setErrorUser(true)
            } else {
                setErrorUser(false)
            }
        } else if (name === 'email') {
            if (!value) {
                setErrorEmail(true)
            } else {
                setErrorEmail(false)
            }
        } else if (name === 'password') {
            if (!value) {
                setErrorPassword(true)
            } else {
                setErrorPassword(false)
            }
        }
    }

    return (
        <form className={'form'} id={'my-form'} onSubmit={formSubmit}>
            <div className="content">
                <input className={`input ${errorUser ? 'red' : null}`} name={'user'} type="text"
                       placeholder={'Full name'}
                       form={'my-form'} autoComplete={'off'}
                       onBlur={(e) => errorFunc(e, 'user')}
                       onChange={(e) => errorFunc(e, 'user')}/>
                <motion.div
                    initial={{display: 'none', y: '-10px', opacity: 0}}
                    animate={errorUser ? {display: 'block', y: '0', opacity: 1} : null}
                    transition={{duration: 0.3}}
                    className={"error"}>Please input your Full name!
                </motion.div>
            </div>

            <div className="content">
                <input className={`input ${errorEmail ? 'red' : null}`} name={'email'} type="text"
                       placeholder={'Email'}
                       form={'my-form'} autoComplete={'off'}
                       onBlur={(e) => errorFunc(e, 'email')}
                       onChange={(e) => errorFunc(e, 'email')}/>
                <motion.div
                    initial={{display: 'none', y: '-10px', opacity: 0}}
                    animate={errorEmail ? {display: 'block', y: '0', opacity: 1} : null}
                    transition={{duration: 0.3}}
                    className={"error"}>Please input your email!
                </motion.div>
            </div>
            <div className="content">
                <input className={`input ${errorPassword ? 'red' : null}`} name={'password'} type="password"
                       placeholder={'Password'}
                       form={'my-form'} autoComplete={'off'}
                       onBlur={(e) => errorFunc(e, 'password')}
                       onChange={(e) => errorFunc(e, 'password')}/>
                <motion.div
                    initial={{display: 'none', y: '-10px', opacity: 0}}
                    animate={errorPassword ? {display: 'block', y: '0', opacity: 1} : null}
                    transition={{duration: 0.3}}
                    className={"error"}>Please input your Password!
                </motion.div>
            </div>
            <div className="content">
                <div className="check">
                    <label> <input type="checkbox"/> Remember me <span>Forgot password</span></label>
                </div>
            </div>
            <div className="content">
                <div className="link">
                    <Button className={`btn-submit ${loading === 'loading' ? 'loading' : ''}`}
                            state={loading} form={'my-form'}>Sign Up</Button>
                    <p>or <Link to={'/sign-in'} className={'span'}>Sing In</Link></p>
                </div>
            </div>
            <div className="content">
                <div className="social">
                    <p>or connect with</p>
                    <div className="icons">
                        <div className="icon"><FaGoogle/></div>
                        <div className="icon"><FaFacebook/></div>
                        <div className="icon"><FaGithub/></div>
                        <div className="icon"><FaTwitter/></div>
                    </div>
                </div>
            </div>
            <AlertForm text={alertText} alert={alert} setAlert={setAlert} status={statusAlert}/>
        </form>
    );
};

export default connect(({Reducer: {newUser}}) => ({newUser}), {postCreateUser, createUser})(FormSignIn);