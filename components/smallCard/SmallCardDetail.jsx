import React from "react"
const SmallCardDetail = ({title,detail})=>{
    return(
        <div className={'card-without-container-detail'}>
            <h4>{title}</h4>
            <p>{detail}</p>
        </div>
    )
}
export default SmallCardDetail