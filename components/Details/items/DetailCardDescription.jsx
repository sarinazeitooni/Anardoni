import { useSelector , useDispatch } from "react-redux";
import style from './scss/DetailCardDescription.module.scss';
import messages from "./messages/messages";
const DetailCardDescription = ({item})=>{
    const btnValue = useSelector(state => state.btnValue);
    const dispatch = useDispatch();
    function btnToggle() {
        dispatch({
            type: "btnToggle"
        });
        document.getElementById('moreMask').style.height="fitContent";
    };
    return (
        <div>
            <div className={style.preview}>
                <span className={style['preview-title']}>{messages.description}</span>
                <div className={style['about-items-container']}>
                    {item.description && <div>{item.description}</div>}
                    <br/>
                    {item.about.map((item) =>
                        <li className={style['description-items']}>
                            {item}
                        </li>
                    )}
                    <div className={style['more-container']}>
                        <div className={style['item-container']} style={{height : btnValue ? "13px" : "fit-content"}} id='more-mask'>
                            {item.more.map((item) => {
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