import React from 'react';
import messages from "../items/messages/messages";
import style from './scss/mobile-detail-information.module.scss';
import _ from "lodash";
function DetailCardInformation({item}){
    const information = _.get(item, "information",['']);
    return(
        <React.Fragment>
            <div className={style.preview}>
                <span className={style['preview-title']}>{messages.information}</span>
                <div className={style['about-container']}>
                    {information.map((item)=>{
                        return(
                            <div>
                                <div className={style.about}>
                                    <div className={style['info-title']}>{item.Title}</div>
                                    <span className={style['info-items']}style={{color:item.color}}>{item.description}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    )
};
export default DetailCardInformation