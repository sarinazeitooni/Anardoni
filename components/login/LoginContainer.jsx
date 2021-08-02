import React, {useEffect, useState} from 'react';
import style from './style/login.module.scss';
import LoginTexts from "./texts/loginTexts";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {toast, ToastContainer} from 'react-nextjs-toast'
import axios from "axios";
const LoginContainer = () => {
    const [userName, setUserName] = useState('');
    const [password, setpassword] = useState('');

    function validation(setItem, id) {
        if (typeof window === 'object') {
            setItem(document.getElementById(id).value)
        }
    }
    function submitAction() {
        axios({
            method: 'post',
            url: 'https://reqres.in/api/login/data',
            data: {
                userName: userName,
                password: password,
                recaptchaToken: '',
                recaptchaType: ''
            }
        })
            .then((res) => {
                toast.notify('با موفقیت انجام شد', {
                    duration: 3,
                    type: "success"
                })
            })
            .catch((error) => {
                toast.notify(error, {
                    duration: 3,
                    type: "error"
                })
            })
    }
    function submit() {
        (userName === '' || password === '') ? toast.notify(LoginTexts.validation, {
                duration: 3,
                type: "error"
            }) :
            submitAction();
    }
    return (
            <div className={style['login-container']}>
                <div className={style['owl-pic']}>
                    <img src="https://anardoni.com/img/owl-login.png"/>
                    <div className={style['right-hand']}/>
                    <div className={style['left-hand']}/>
                </div>
                <h2 className={style['title']}>{LoginTexts.title}</h2>
                <div className={style['input-container']}>
                    <input onChange={() => {
                        validation(setUserName, 'username')
                    }} className={style['input']} id='username' type='text' placeholder={LoginTexts.user}/>
                    <input onChange={() => {
                        validation(setpassword, "password")
                    }} className={style['input']} id='password' type='text' placeholder={LoginTexts.password}/>
                    <button onClick={submit} className={style['submit-btn']} type='submit'>{LoginTexts.login}</button>
                </div>
                <p className={style['forgot-password']}>{LoginTexts.forgotPassword}</p>
                <a href='/register'><p className={style['sign-up']}><ArrowRightAltIcon/>{LoginTexts.signUp}</p></a>
                <ToastContainer align={"right"} position={"bottom"}/>
            </div>
    )
}
export default LoginContainer;