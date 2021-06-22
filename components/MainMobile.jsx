import React from 'react';
import MobileNavigation from "./navigation/mobile/MobileNavigation";
import FirstSwipperMobile from "./FirstSwipper/mobile/FirstSwipperMobile";
import TripSwipperMobile from "./TripsSwipper/mobile/TripSwipperMobile";
import MobileGamesSwipper from "./gamesSwipper/mobile/MobileGamesSwipper";
import messages from "./TripsSwipper/messages/messages";

function MainMobile() {

    return (
        <React.Fragment>
            <MobileNavigation/>
            <FirstSwipperMobile/>
            <TripSwipperMobile title={messages.trips}/>
            <MobileGamesSwipper/>
        </React.Fragment>
    )
};
export default MainMobile;