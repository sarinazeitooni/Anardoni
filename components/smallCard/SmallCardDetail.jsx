import React from "react";
import style from './scss/smallCard.module.scss'
const SmallCardDetail = ({title,detail})=>{
    return(
        <div className={style['card-without-container-detail']}>
            <h4>{title}</h4>
            <p>{detail}</p>
        </div>
    )
}
export default SmallCardDetail