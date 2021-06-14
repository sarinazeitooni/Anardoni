import React from "react"
import SmallCardImage from './SmallCardImage'
import SmallCardDetail from './SmallCardDetail'
const SmallCardContainer = ({title,detail,cardImage})=>{
    return(
        <div className={'card-without-container-container'}>
            <SmallCardImage cardImage={cardImage} />
            <SmallCardDetail title={title} detail={detail}/>
        </div>
    )
}
export default SmallCardContainer