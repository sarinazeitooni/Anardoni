import React from 'react';
import MobileNavigation from "./navigation/mobile/MobileNavigation";
import FirstSwipperMobile from "./FirstSwipper/mobile/FirstSwipperMobile";
import TripSwipperMobile from "./TripsSwipper/mobile/TripSwipperMobile";
function MainMobile(){
    return(
    <React.Fragment>
        <MobileNavigation/>
        <FirstSwipperMobile/>
        <TripSwipperMobile/>
    </React.Fragment>
    )
};
export default MainMobile;