import React from "react";
import style from './scss/small-card.module.scss'
import SmallCardImage from './SmallCardImage';
import SmallCardDetail from './SmallCardDetail';
const SmallCardContainer = ({title,detail,cardImage})=>{
    return(
        <div className={style['card-without-container-container']}>
            <SmallCardImage cardImage={cardImage} />
            <SmallCardDetail title={title} detail={detail}/>
        </div>
    )
}
export default SmallCardContainer