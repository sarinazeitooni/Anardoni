import React from 'react';
import RegisterContainer from "../components/register/registerContainer";
import style from "../styles/login.module.scss";
import Navigation from "../components/navigation/Navigation";
import MobileNavigation from "../components/navigation/mobile/MobileNavigation";
import FeedBack from "../components/feedback/feedback";
function Register(){
    return(
        <React.Fragment>
            <FeedBack/>
            <span className={style['browser']}>
                <Navigation/>
            </span>
            <span className={style['mobile']}>
                <MobileNavigation name={'mobile'}/>
            </span>
            <RegisterContainer/>
        </React.Fragment>
    )
}
export default Register;