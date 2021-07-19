import messages from "../items/messages/messages";
import _ from "lodash";
import style from './scss/mobile-detail-new-items.module.scss';
import React from "react";

const MobileDetailNewItems = ({item}) => {
    const version = _.get(item, "version", "");
    const newItems = _.get(item, "newItems", ['']);
    const lastUpdate = _.get(item, "lastUpdate", "");
    return (
        <React.Fragment>
            <div className={style['whats-new-container']}>
                <div className={style['new-items']}>
                    <div className={style['preview-title']}>{messages.whatsNew}</div>
                    <div className={style['right-text']}>{messages.version}{version}</div>
                </div>
                <div className={style.versions}>
                    <div className={style['colored-text']}> {messages.versionHistory} </div>
                    <div className={style['last-update-container']}>
                        {lastUpdate}
                    </div>
                </div>
            </div>
            <div className={style['about-items-container']}>
                {
                    newItems.map((item, index) => {
                        return (
                            <li key={index} className={style['about-items']}>{item}</li>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}
export default MobileDetailNewItems;