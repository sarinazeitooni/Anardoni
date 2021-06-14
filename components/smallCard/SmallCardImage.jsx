import React from "react"
const SmallCardImage = ({cardImage})=>{
    return(
        <div className={'card-without-container-image'}>
            <img src={cardImage} width={95} height={95}/>
        </div>
    )
}
export default SmallCardImage;