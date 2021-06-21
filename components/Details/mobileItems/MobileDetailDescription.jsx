import { useSelector , useDispatch } from "react-redux";
import style from './scss/mobile-detail-description.module.scss';
import _ from "lodash";
import messages from "../items/messages/messages";
import React from "react";
const MobileDetailDiscription = ({item})=>{
    const more = _.get(item, "more",['']);
    const about = _.get(item, "about",['']);
    const btnValue = useSelector(state => state.btnValue);
    const dispatch = useDispatch();
    function btnToggle() {
        dispatch({
            type: "btnToggle"
        });
        document.getElementById('more-mask').style.height="fitContent";
    };
    return (
        <React.Fragment>
            <div className={style.preview}>
                <span className={style['preview-title']}>{messages.description}</span>
                <div className={style['about-items-container']}>
                    {about.map((item) =>
                        <li className={style['description-items']}>
                            {item}
                        </li>
                    )}
                    <div className={style['more-container']}>
                        <div className={style['item-container']} style={{height : btnValue ? "13px" : "fit-content"}} id='more-mask'>
                            {more.map((item) => {
                                return (
                                    <li style={{color: btnValue ? "gray" : "white"}} className={style['about-items']}>
                                        {item}
                                    </li>
                                )
                            })}
                        </div>
                        <div className={style['button-container']}>
                            <button className={style['toggle-btn']} onClick={btnToggle}>{btnValue ? messages.more : messages.close }</button>
                        </div>
                    </div>
                </div>
            </div>
            <img className={style.ad} src='https://anardoni.com/img/ads/anargift.gif'/>
        </React.Fragment>
    )
}
export default MobileDetailDiscription;