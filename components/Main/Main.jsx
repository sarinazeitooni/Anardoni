import React, {useEffect} from 'react';
import Navigation from "../navigation/Navigation";
import FirstSwipper from "../FirstSwipper/FirstSwipper";
import TripsSwipper from "../TripsSwipper/TripsSwipper";
import FeedBack from "../feedback/feedback";
import messages from "../TripsSwipper/messages/messages";
import GamesSwipper from "../gamesSwipper/GamesSwipper";
function Main() {
    return (
        <React.Fragment>
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