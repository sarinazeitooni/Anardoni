import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import messages from "../items/messages/messages";
import style from './scss/mobile-detail-links.module.scss';
function MobileDetailLinks({item}) {
    return (
        <React.Fragment>
            {
                item.links &&
                <div className={style['link-container']}>
                    {
                        item.links.map((link) => {
                            return (
                                <div>
                                    <h3 className={style['link-title']}>{messages.linkTitle}</h3>
                                    <div className={style.link}><span> <ArrowBackIosIcon/> </span> {link}</div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </React.Fragment>
    )
}
export default MobileDetailLinks;