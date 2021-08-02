import React from 'react';
import style from './style/login.module.scss';
import Navigation from "../navigation/Navigation";
import LoginTexts from "./texts/loginTexts";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
function LoginContainer() {
    return (
        <React.Fragment>
            <Navigation/>
            <div className={style['login-container']}>
                <div className={style['owl-pic']}>
                    <img src="https://anardoni.com/img/owl-login.png"/>
                    <div className={style['right-hand']}/>
                    <div className={style['left-hand']}/>
                </div>
                <h2 className={style['title']}>{LoginTexts.title}</h2>
                <div className={style['input-container']}>
                    <input className={style['input']} type='text' placeholder={LoginTexts.user}/>
                    <input className={style['input']} type='text' placeholder={LoginTexts.password}/>
                    <button className={style['submit-btn']} type='submit'>{LoginTexts.login}</button>
                </div>
                <p className={style['forgot-password']}>{LoginTexts.forgotPassword}</p>
                <p className={style['sign-up']}> <ArrowRightAltIcon/>{LoginTexts.signUp}</p>
            </div>
        </React.Fragment>
    )
}

export default LoginContainer;