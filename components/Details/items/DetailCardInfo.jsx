import React from 'react';
import style from './scss/DetailCardInfo.module.scss';
import messages from './messages/messages';
import _ from "lodash";
const DetailCardInfo = ({item})=>{
    const detailImage = _.get(item, "detailImage",'');
    const subTitle = _.get(item, "subTitle",'');
    const seller = _.get(item, "seller",'');
    const title = _.get(item, "title",'');
    return(
        <div>
            <div className={style['card-info']}>
                <div className={style['card-info-pic']}>
                    <img src={detailImage}/>
                </div>
                <div className={style['card-info-name']}>
                    <span className={style.rate}> 4+ </span> <h2> {title} </h2>
                    <h4>{subTitle}</h4>
                    <h4>{seller}</h4>
                    <h6 className={style['get-button']}>{messages.getbtn}</h6>
                </div>
            </div>
        </div>
    )
}
export default DetailCardInfo;