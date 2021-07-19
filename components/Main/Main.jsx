import React, {useEffect} from 'react';
import Navigation from "../navigation/Navigation";
import FirstSwipper from "../FirstSwipper/FirstSwipper";
import TripsSwipper from "../TripsSwipper/TripsSwipper";
import FeedBack from "../feedback/feedback";
import messages from "../TripsSwipper/messages/messages";
import GamesSwipper from "../gamesSwipper/GamesSwipper";
import useViewport from "../../customHook/useDeviceDetect";
import MobileNavigation from "../navigation/mobile/MobileNavigation";

function Main() {
    const isMobile = useViewport();
    return (
        <React.Fragment>
            {/*{isMobile ? <MobileNavigation/>*/}
            {/*    : <Navigation/>*/}
            {/*}*/}
            <Navigation/>
            <FirstSwipper/>
            <FeedBack/>
            <TripsSwipper title={messages.trips}/>
            <FirstSwipper/>
            <GamesSwipper/>
        </React.Fragment>
    )
};
export default Main;