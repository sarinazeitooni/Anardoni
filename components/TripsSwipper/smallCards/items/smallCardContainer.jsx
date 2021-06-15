import React from "react";
import smallCardDetail from "./smallCardDetail";
import smallCardImage from "./smallCardImage";
import style from '../scss/smallCard.module.scss';
const smallCardContainer = ({title,detail,cardImage})=>{
    return(
        <div className={style.cardWithoutContainerContainer}>
            {console.log('test')}
            <smallCardImage cardImage={cardImage} />
            <smallCardDetail title={title} detail={detail}/>
        </div>
    )
}
export default smallCardContainer;