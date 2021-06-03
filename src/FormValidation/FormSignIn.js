import React, {useState} from 'react';
import {motion} from "framer-motion";
import AlertForm from "./AlertForm";
import {FaFacebook, FaGithub, FaGoogle, FaTwitter} from "react-icons/all";
import {Link, useHistory} from 'react-router-dom'
import {FaTimesCircle} from "react-icons/all";


const FormSignIn = ({setIsAuth, setIsSignIs}) => {

    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertText, setAlertText] = useState('Hello')
    const history = useHistory()


    const formSubmit = (e) => {
        e.preventDefault()
        const emailValue = e.target.children[0].children[0].value
        const passwordValue = e.target.children[1].children[0].value

        if (!emailValue.includes('@')) {
            setAlertText('There is no user record corresponding to this identifier. The user may have been deleted.')
            setAlert(true)
            setErrorEmail(true)
        } else if (passwordValue.length < 6) {
            setAlertText('Password length is less than 6')
            setAlert(true)
            setErrorPassword(true)
        }

        if (passwordValue === 'nodir#123' && emailValue === 'nodir@example.com') {
            setIsAuth(true)
            history.push('/main/dashboard/crypto')
        } else if (passwordValue !== 'nodir#123' && emailValue === 'nodir@example.com') {
            setAlertText('The password is invalid or the user does not have a password.')
            setAlert(true)
            setErrorPassword(true)
        } else if (passwordValue === 'nodir#123' && emailValue !== 'nodir@example.com') {
            setAlertText('The email is invalid or the user does not have a email.')
            setAlert(true)
            setErrorEmail(true)
        } else if (passwordValue !== 'nodir#123' && emailValue !== 'nodir@example.com') {
            setAlertText('Email and password are invalid or the user does not have email and password.')
            setAlert(true)
            setErrorEmail(true)
            setErrorPassword(true)
        }
    }

    const errorFunc = (e, name) => {
        let value = e.target.value
        if (name === 'email') {
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
                <input className={`input ${errorEmail ? 'red' : null}`} name={'email'} type="text"
                       placeholder={'Email'} defaultValue={'nodir@example.com'}
                       form={'my-form'} autoComplete={'off'}
                       onBlur={(e) => errorFunc(e, 'email')}
                       onChange={(e) => errorFunc(e, 'email')}/>
                <motion.div
                    initial={{display: 'none', y: '-10px', opacity: 0}}
                    animate={errorEmail ? {display: 'block', y: '0', opacity: 1} : null}
                    transition={{duration: 0.3}}
                    className={"error"}>The input is not valid E-mail!
                </motion.div>
            </div>
            <div className="content">
                <input className={`input ${errorPassword ? 'red' : null}`} name={'password'} type="password"
                       placeholder={'Password'} defaultValue={'nodir#123'}
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
                    <label> <input type="checkbox"/> by signing up, I accept <span>Term & Condition</span></label>
                </div>
            </div>
            <div className="content">
                <div className="link">
                    <button className={'btn-submit'} form={'my-form'}>Sign In</button>
                    <p>or <Link to={'/sign-up'} className={'span'}>Sing Up</Link></p>
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
            <div className="content">
                <p className="footr">
                    demo user email: 'nodir@example.com' and password: 'nodir#123'
                </p>
            </div>
            <AlertForm text={alertText} alert={alert} setAlert={setAlert} icon={FaTimesCircle} color={'#f5222d'}/>
        </form>
    );
};

export default FormSignIn;