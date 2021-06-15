import { useSelector , useDispatch } from "react-redux";
import style from './scss/DetailCardDescription.module.scss'
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
                <span className={style.previewTitle}>
                    توضیحات
                </span>
                <div className={style.aboutItemsContainer}>
                    {item.description && <div>{item.description}</div>}
                    <br/>
                    {item.about.map((item) =>
                        <li className={style.descriptionItems}>
                            {item}
                        </li>
                    )}
                    <div className={style.moreContainer}>
                        <div className={style.itemContainer} style={{height : btnValue ? "10px" : "fit-content"}} id='moreMask'>
                            {item.more.map((item) => {
                                return (
                                    <li style={{color: btnValue ? "gray" : "white"}} className={style.aboutItems}>
                                        {item}
                                    </li>
                                )
                            })}
                        </div>
                        <div className={style.buttonContainer}>
                            <button className={style.toggleBtn} onClick={btnToggle}>{btnValue ? "بیشتر" : "بستن"}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}
export default DetailCardDescription;