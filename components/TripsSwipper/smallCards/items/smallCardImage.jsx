import React from "react";
import style from '../scss/smallCard.module.scss';
import Image from "next/image";
const smallCardImage = ({cardImage})=>{
    return(
        <div className={style.cardWithoutContainerImage}>
            <Image src={cardImage} width={95} height={95}/>
        </div>
    )
}
export default smallCardImage;