import React from 'react';
import MobileNavigation from "../navigation/mobile/MobileNavigation";
import MobileDetailMainImage from "./mobileItems/MobileDetailMainImage";
import MobileDetailInfo from "./mobileItems/MobileDetailInfo";
import ThirdSwipper from "../thirdSwipper/ThirdSwipper";
import MobileNewItems from "./mobileItems/MobileNewItems";
import MobileDetailDescription from "./mobileItems/MobileDetailDescription";
import MobileDetailLinks from "./mobileItems/MobileDetailLinks";
import MobileDetailInformation from "./mobileItems/MobileDetailInformation";
function MobileDetail({card}){
    return(
        <React.Fragment>
            <MobileNavigation/>
            <MobileDetailMainImage item={card}/>
            <MobileDetailInfo item={card}/>
            <ThirdSwipper item={card} />
            <MobileNewItems item={card}/>
            <MobileDetailDescription item={card}/>
            <MobileDetailLinks item={card}/>
            <MobileDetailInformation item={card}/>
        </React.Fragment>
    )
};
export default MobileDetail;