import { useSelector , useDispatch } from "react-redux";
import style from './scss/DetailCardDescription.module.scss';
import messages from "./messages/messages";
import _ from "lodash";
const DetailCardDescription = ({item})=>{
    const description = _.get(item, "description",'');
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
        <div>
            <div className={style.preview}>
                <span className={style['preview-title']}>{messages.description}</span>
                <div className={style['about-items-container']}>
                    {description && <div>{description}</div>}
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
            <div className="line"></div>
        </div>
    )
}
export default DetailCardDescription;