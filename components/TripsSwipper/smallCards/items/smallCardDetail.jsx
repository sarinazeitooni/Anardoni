import React from "react";
import style from '../scss/smallCard.module.scss';
const smallCardDetail = ({title,detail})=>{
    return(
        <div className={style.cardWithoutContainerDetail}>
            <h4>{title}</h4>
            <p>{detail}</p>
        </div>
    )
}
export default smallCardDetail