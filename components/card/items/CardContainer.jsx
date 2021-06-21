import React from "react";
import style from '../scss/card.module.scss';
const CardContainer = ({children, containerImage}) => {
    return (
        <div className={style['card-container']}>
            <div className={style['container-image']}
                 style={{background :  `url("${containerImage}") no-repeat center center / cover`}}/>
            {children}
        </div>
    )
}
export default CardContainer