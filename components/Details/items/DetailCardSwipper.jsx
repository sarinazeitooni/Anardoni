import ThirdSwipper from "../../thirdSwipper/ThirdSwipper";
import style from './scss/DetailCardSwipper.module.scss';
import messages from "./messages/messages";
const DetailCardSwipper = ()=>{
    return(
        <div>
            <div className={style.preview}>
                <span className={style['preview-title']}>{messages.swipperTitle}</span>
                <ThirdSwipper/>
            </div>
            <div className='line'></div>
        </div>
    )
}
export default DetailCardSwipper;