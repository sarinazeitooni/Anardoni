import ThirdSwipper from "../../thirdSwipper/ThirdSwipper";
import style from './scss/DetailCardSwipper.module.scss';
import messages from "./messages/messages";

const DetailCardSwipper = ({item})=>{
    return(
            <div className={style.preview}>
                <span className={style['preview-title']}>{messages.swipperTitle}</span>
                <ThirdSwipper item={item}/>
            </div>
    )
}
export default DetailCardSwipper;