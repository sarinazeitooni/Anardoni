import React from 'react';
import style from './style/register.module.scss';
import LoginTexts from "../login/texts/loginTexts";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function RegisterContainer() {
    return (
        <React.Fragment>
            <div className={style['register-container']}>
                <div className={style['input-container']}>
                    <input className={style['input']} id='name' type='text' placeholder={LoginTexts.name}/>
                    <input className={style['input']} id='lastname' type='text' placeholder={LoginTexts.lastName}/>
                    <input className={style['input']} id='phone' type='text' placeholder={LoginTexts.number}/>
                    <button className={style['submit-btn']} type='submit'>{LoginTexts.next}</button>
                </div>
                <p className={style['rules']}>{LoginTexts.rules}</p>
            <a href='/register'><p className={style['login']}><ArrowRightAltIcon/>{LoginTexts.loginText}</p></a>
        </div>
</React.Fragment>
)
}

export default RegisterContainer;