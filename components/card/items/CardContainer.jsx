import React from "react";
import style from '../scss/Card.module.scss';
const CardContainer = ({children, containerImage}) => {
    return (
        <div className={style['card-container']}>
            <div className={style['container-image']}
                 style={{background :  `url("${containerImage}") no-repeat center center / cover`}}
            > </div>
            {children}
        </div>
    )
}
export default CardContainer