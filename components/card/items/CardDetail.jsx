import React from "react";
import style from '../scss/card-detail.module.scss';
import Image from 'next/image';

const CardDetail = ({detailImage, title, subTitle}) => {
    return (
        <div className={style['card-detail-container']}>
            <div className={style['card-detail-text']}>
                <h4>{title}</h4>
                <p>{subTitle}</p>
            </div>
            <div className={style['card-detail-image']}>
                <Image width={76} alt='card-detail-image' src={detailImage} height={76}/>
            </div>
        </div>
    )
}
export default CardDetail;