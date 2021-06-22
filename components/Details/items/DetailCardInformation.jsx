import React from 'react';
import style from './scss/DetailCardInformation.module.scss';
import messages from "./messages/messages";
import {MobileView} from 'react-device-detect';
import _ from "lodash";

function DetailCardInformation({item}) {
    const information = _.get(item, "information", ['']);
    return (
        <div className={style.preview}>
            <span className={style['preview-title']}>{messages.information}</span>
            <div className={style['about-container']}>
                {information.map((item) => {
                    return (
                        <div>
                            <div className={style.about}>
                                <div className={style['info-title']}>{item.Title}</div>
                                <span className={style['info-items']}
                                      style={{color: item.color}}>{item.description}</span>
                            </div>
                            <MobileView>
                                <div className='line'></div>
                            </MobileView>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};
export default DetailCardInformation