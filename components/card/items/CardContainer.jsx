import React from "react";
import style from '../scss/Card.module.scss';
const CardContainer = ({children, containerImage}) => {
    return (
        <div className={style.cardContainer}>
            <div className={style.containerImage}
                 style={{background :  `url("${containerImage}") no-repeat center center / cover`}}
            > </div>
            {children}
        </div>
    )
}
export default CardContainer