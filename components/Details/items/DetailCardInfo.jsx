import React from 'react';
import style from './scss/DetailCardInfo.module.scss'
;const DetailCardInfo = ({item})=>{
    return(
        <div>
            <div className={style.cardInfo}>
                <div className={style.cardInfoPic}>
                    <img src={item.detailImage}/>
                </div>
                <div className={style.cardInfoName}>
                    <span className={style.rate}> 4+ </span> <h2> {item.title} </h2>
                    <h4>{item.subTitle}</h4>
                    <h4>{item.seller}</h4>
                    <h6 className={style.getButton}>رایگان</h6>
                </div>
            </div>
            <div className={style.line}></div>
        </div>
    )
}
export default DetailCardInfo;