import React from "react";
import style from '../scss/card-container.module.scss';

const CardContainer = ({children, containerImage}) => {
    return (
        <div className={style['card-container']}>
            <div className={style['container-image']}
                 style={{background: `url("${containerImage}")`}}/>
            {children}
        </div>
    )
}
export default CardContainer