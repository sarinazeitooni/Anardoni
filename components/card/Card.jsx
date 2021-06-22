import React from "react"
import CardContainer from "./items/CardContainer";
import CardDetail from "./items/CardDetail";

const Card = ({id, containerImage, detailImage, title, subTitle}) => {
    return (
        <CardContainer containerImage={containerImage}>
            <CardDetail id={id} title={title} subTitle={subTitle} detailImage={detailImage}/>
        </CardContainer>
    )
}
export default Card