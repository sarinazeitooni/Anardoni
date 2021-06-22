import React from 'react';
import TripSwipperMobile from "../../TripsSwipper/mobile/TripSwipperMobile";
import messages from "../messages/messages";

function GamesSwipper() {
    return (
        <div id='games'>
            <TripSwipperMobile title={messages.games}/>
        </div>
    )
};
export default GamesSwipper;