import React from 'react';
import style from './scss/mobile-detail-info.module.scss';
import messages from "../items/messages/messages";
import _ from "lodash";

const MobileDetailInfo = ({item}) => {
    const detailImage = _.get(item, "detailImage", '');
    const subTitle = _.get(item, "subTitle", '');
    const title = _.get(item, "title", '');
    return (
        <React.Fragment>
            <div className={style['mobile-card-info']}>
                <div className={style['mobile-card-info-pic']}>
                    <img src={detailImage}/>
                </div>
                <div className={style['mobile-card-info-name']}>
                    <h2> {title} </h2>
                    <h4>{subTitle}</h4>
                    <h6 className={style['mobile-get-button']}>{messages.getbtn}</h6>
                </div>
            </div>
            <div className={style['feedback-container']}>
                <span className={style.rate}>
                    <div>4+ </div>
                    <div>{messages.age}</div>
                </span>
                <span className={style['feedback']}>
                    <div>0.0</div>
                    <div>0 {messages.feedback} </div>
                    </span>
            </div>
        </React.Fragment>
    )
}
export default MobileDetailInfo;