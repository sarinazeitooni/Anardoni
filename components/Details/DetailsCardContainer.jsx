import React from "react";
import DetailCardInfo from "./items/DetailCardInfo";
import DetailMainImage from "./items/DetailMainImage";
import DetailCardSwipper from "./items/DetailCardSwipper";
import DetailCardNewItems from "./items/DetailCardNewItems";
import DetailCardDescription from "./items/DetailCardDescription";
import DetailAdImage from "./items/DetailAdImage";
import DetailCardLink from "./items/DetailCardLink";
import DetailCardInformation from "./items/DetailCardInformation";
const DetailsContainer = ({card})=>{
    return(
        <fragment>
            <DetailMainImage item={card}/>
            <DetailCardInfo item={card}/>
            <DetailCardSwipper/>
            <DetailCardNewItems item={card}/>
            <DetailCardDescription item={card}/>
            <DetailAdImage/>
            <DetailCardLink item={card}/>
            <DetailCardInformation item={card}/>
        </fragment>
    )
};
export default DetailsContainer;