import React from "react";
import style from './scss/small-card.module.scss'
const SmallCardImage = ({cardImage})=>{
    return(
        <div className={style['card-without-container-image']}>
            <img src={cardImage} width={95} height={95}/>
        </div>
    )
}
export default SmallCardImage;