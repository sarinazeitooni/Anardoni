import React from "react";
import style from './scss/smallCard.module.scss'
const SmallCardImage = ({cardImage})=>{
    return(
        <div className={style.cardWithoutContainerImage}>
            <img src={cardImage} width={95} height={95}/>
        </div>
    )
}
export default SmallCardImage;