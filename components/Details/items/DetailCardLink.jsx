import React from 'react';
import style from './scss/DetailCardLink.module.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import messages from "./messages/messages";
import _ from "lodash";
function DetailCardLink({item}){
    const links = _.get(item, "links",[]);
    const margin = (links) && '10px auto';
    return(
        <>
            {(links) &&
            <div style={{margin: {margin}}} className={style['link-container']}>
                {
                    links.map((link)=>{
                        return(
                            <div>
                                <h3 className={style['link-title']}>{messages.linkTitle}</h3>
                                <div className={style.link}><span> <ArrowBackIosIcon/> </span> {link}</div>
                            </div>
                        )
                    })
                }
            </div>}
        </>
    )
};
export default DetailCardLink;