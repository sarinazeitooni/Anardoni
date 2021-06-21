import React from 'react';
import style from './scss/mobile-card.module.scss';
import messages from "./messages/messages";
function MobileCardContainer({title,subtitle,containerImage}){
    return(
        <div className={style['mobile-card-container']}>
            <div className={style['titles-container']}>
                <div className={style['titles']}>
                    <div className={style['title']}>{title}</div>
                    <div className={style['subtitle']}>{subtitle}</div>
                </div>
                <div className={style['get-button']}>{messages.getButton}</div>
            </div>
            <div className={style['main-image']} style={{background :  `url("${containerImage}") no-repeat center center / cover`}}>
            </div>
        </div>
    )
};
export default MobileCardContainer;