import React from 'react';
import MobileNavigation from "./navigation/mobile/MobileNavigation";
import FirstSwipperMobile from "./FirstSwipper/mobile/FirstSwipperMobile";
function MainMobile(){
    return(
    <React.Fragment>
        <MobileNavigation/>
        <FirstSwipperMobile/>
    </React.Fragment>
    )
};
export default MainMobile;