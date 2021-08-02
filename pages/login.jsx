import React, {Fragment} from 'react';
import LoginContainer from "../components/login/LoginContainer";
import Navigation from "../components/navigation/Navigation";
import MobileNavigation from "../components/navigation/mobile/MobileNavigation";
import style from '../styles/login.module.scss';
const Login=()=> {
    return (
        <Fragment>
            <span className={style['browser']}>
                <Navigation/>
            </span>
            <span className={style['mobile']}>
                <MobileNavigation name={'mobile'}/>
            </span>
            <LoginContainer/>
        </Fragment>
    )
}

export default Login;