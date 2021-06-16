import React from "react";
import style from '../scss/Card.module.scss';
import Image from 'next/image';
const CardDetail=({detailImage,title,subTitle,id})=>{
    return(
        <div className={style['card-detail-container']}>
            <div className={style['card-detail-text']}>
                <h4>{title}</h4>
                <p>{subTitle}</p>
            </div>
            <div className={style['card-detail-image']}>
                <Image src={detailImage} width={76} alt='card-detail-image' height={76}/>
            </div>
        </div>
    )
}
export default CardDetail;