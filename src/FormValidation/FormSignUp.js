import React, {useState} from 'react';
import {motion} from "framer-motion";
import AlertForm from "./AlertForm";
import {FaFacebook, FaGithub, FaGoogle, FaTwitter} from "react-icons/all";
import {Link} from 'react-router-dom'
import {FaCheckCircle} from 'react-icons/all'
import {useHistory} from 'react-router-dom'

const FormSignIn = () => {

    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorUser, setErrorUser] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const history = useHistory()

    const formSubmit = (e) => {
        e.preventDefault()
        const userValue = e.target.children[0].children[0].value
        const emailValue = e.target.children[1].children[0].value
        const passwordValue = e.target.children[2].children[0].value
        console.log(emailValue)
        if (!userValue) {
            setErrorUser(true)
        } else if (!emailValue.includes('@')) {
            setErrorEmail(true)
        } else if (passwordValue.length < 6) {
            setErrorPassword(true)
        } else {
            setAlertText('Successfully')
            setAlert(true)
            e.target.reset()
            setTimeout(()=>{
                history.push('/sing-in')
            },1000)
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
        } else if (name === 'user') {
            if (!value) {
                setErrorUser(true)
            } else {
                setErrorUser(false)
            }
        }
    }

    return (
        <form className={'form'} id={'my-form'} onSubmit={formSubmit}>
            <div className="content">
                <input className={`input ${errorUser ? 'red' : null}`} name={'user'} type="text"
                       placeholder={'Username'}
                       form={'my-form'} autoComplete={'off'}
                       onBlur={(e) => errorFunc(e, 'user')}
                       onChange={(e) => errorFunc(e, 'user')}/>
                <motion.div
                    initial={{display: 'none', y: '-10px', opacity: 0}}
                    animate={errorUser ? {display: 'block', y: '0', opacity: 1} : null}
                    transition={{duration: 0.3}}
                    className={"error"}>Please input your username!
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
                    <button className={'btn-submit'} form={'my-form'}>Sign Up</button>
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
            <AlertForm text={alertText} alert={alert} setAlert={setAlert} icon={FaCheckCircle} color={'green'}/>
        </form>
    );
};

export default FormSignIn;