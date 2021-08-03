import React, {useState} from 'react';
import style from './style/login.module.scss';
import LoginTexts from "./texts/loginTexts";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {ToastContainer, toast} from 'react-toastify';
import axios from "axios";
import {useDispatch} from "react-redux";
import LoginAction from "../../redux/action/loginAction";

const LoginContainer = () => {
    const [userName, setUserName] = useState('');
    const [password, setpassword] = useState('');
    const [buttonAbility, setButtonAbility] = useState(false);
    const dispatch = useDispatch();
    function validation(setItem, id) {
        if (typeof window === 'object') {
            setItem(document.getElementById(id).value)
        }
    }
    const options = {
        position: "bottom-right",
        autoClose: 4000,
        progressClassName: style.progress,
        className: style.toast,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    }
    function submitAction() {
        setButtonAbility(true);
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
                setButtonAbility(false);
                dispatch(LoginAction(res.data));
                toast('با موفقیت انجام شد',
                    options
                );
            })
            .catch((error) => {
                toast('خطا', options);
            })
    }
    function submit() {
        (userName === '' || password === '') ? toast('لطفا فیلد ها را تکمیل کنید', options) :
            submitAction();
        if (typeof window === 'object') {
            let item = document.querySelector('#password');
            let item2 = document.querySelector('#username');
            item.value = '';
            item2.value = '';
            setpassword('');
            setUserName('');
        }
    }
    return (
        <React.Fragment>
            <div className={style['login-container']}>
                <div className={style['owl-pic']}>
                    <img src="https://anardoni.com/img/owl-login.png"/>
                    <div className={style['right-hand']}/>
                    <div className={style['left-hand']}/>
                </div>
                <h2 className={style['title']}>{LoginTexts.title}</h2>
                <div className={style['input-container']}>
                    <form>
                        <input onChange={() => {
                            validation(setUserName, 'username')
                        }} className={style['input']} id='username' type='text' placeholder={LoginTexts.user}/>
                        <input onChange={() => {
                            validation(setpassword, "password")
                        }} className={style['input']} id='password' autoComplete="on" type='password'
                               placeholder={LoginTexts.password}/>
                        <button disabled={buttonAbility} onClick={submit} className={style['submit-btn']}
                                type='submit'>{LoginTexts.login}</button>
                    </form>
                </div>
                <p className={style['forgot-password']}>{LoginTexts.forgotPassword}</p>
                <a href='/register'><p className={style['sign-up']}><ArrowRightAltIcon/>{LoginTexts.signUp}</p></a>
            </div>
            <ToastContainer/>
        </React.Fragment>
    )
}
export default LoginContainer;