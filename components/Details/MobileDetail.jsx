import React from 'react';
import MobileNavigation from "../navigation/mobile/MobileNavigation";
import MobileDetailMainImage from "./mobileItems/MobileDetailMainImage";
import MobileDetailInfo from "./mobileItems/MobileDetailInfo";
import ThirdSwipper from "../thirdSwipper/ThirdSwipper";
import MobileNewItems from "./mobileItems/MobileNewItems";
import MobileDetailDescription from "./mobileItems/MobileDetailDescription";
import DetailAdImage from "./items/DetailAdImage";
function MobileDetail({card}){
    return(
        <React.Fragment>
            <MobileNavigation/>
            <MobileDetailMainImage item={card}/>
            <MobileDetailInfo item={card}/>
            <ThirdSwipper/>
            <MobileNewItems item={card}/>
            <MobileDetailDescription item={card}/>
        </React.Fragment>
    )
};
export default MobileDetail;