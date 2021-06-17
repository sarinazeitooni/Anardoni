import React from 'react';
import MobileNavigation from "../navigation/mobile/MobileNavigation";
import MobileDetailMainImage from "./mobileItems/MobileDetailMainImage";
import MobileDetailInfo from "./mobileItems/MobileDetailInfo";
import ThirdSwipper from "../thirdSwipper/ThirdSwipper";
function MobileDetail({card}){
    return(
        <React.Fragment>
            <MobileNavigation/>
            <MobileDetailMainImage item={card}/>
            <MobileDetailInfo item={card}/>
            <ThirdSwipper/>
        </React.Fragment>
    )
};
export default MobileDetail;