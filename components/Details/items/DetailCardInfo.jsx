import React from 'react';
import style from './scss/DetailCardInfo.module.scss';
import messages from './messages/messages'
;const DetailCardInfo = ({item})=>{
    return(
        <div>
            <div className={style['card-info']}>
                <div className={style['card-info-pic']}>
                    <img src={item.detailImage}/>
                </div>
                <div className={style['card-info-name']}>
                    <span className={style.rate}> 4+ </span> <h2> {item.title} </h2>
                    <h4>{item.subTitle}</h4>
                    <h4>{item.seller}</h4>
                    <h6 className={style['get-button']}>{messages.free}</h6>
                </div>
            </div>
            <div className='line'></div>
        </div>
    )
}
export default DetailCardInfo;