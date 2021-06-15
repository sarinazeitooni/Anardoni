import ThirdSwipperData from "../../../data/ThirdSwipperData";
import ThirdSwipper from "../../thirdSwipper/ThirdSwipper";
import style from './scss/DetailCardSwipper.module.scss'
const DetailCardSwipper = ()=>{
    let data = ThirdSwipperData;
    return(
        <div>
            <div className={style.preview}>
                <span className={style.previewTitle}>پیش نمایش</span>
                <ThirdSwipper/>
            </div>
            <div className={style.line}></div>
        </div>
    )
}
export default DetailCardSwipper;