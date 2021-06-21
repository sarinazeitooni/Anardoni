import React from 'react';
import style from './scss/DetailCardLink.module.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import messages from "./messages/messages";
function DetailCardLink({item}){
    return(
        <>
            {
                item.links &&
                <div className={style['link-container']}>
                    {
                        item.links.map((link)=>{
                            return(
                                <div>
                                    <h3 className={style['link-title']}>{messages.linkTitle}</h3>
                                    <div className={style.link}><span> <ArrowBackIosIcon/> </span> {link}</div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </>
    )
};
export default DetailCardLink;