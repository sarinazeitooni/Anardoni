import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import messages from "../items/messages/messages";
import style from './scss/MobileDetailLinks.module.scss'
import _ from "lodash";
function MobileDetailLinks({item}){
    const links = _.get(item, "links",[]);
    const margin = (links) && '10px auto';
    const border = (links) && '1px solid #444';
    return(
        <>
            {(links) &&
            <div style={{margin: {margin}, borderBottom : {border}}} className={style['link-container']}>
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

}
export default MobileDetailLinks;