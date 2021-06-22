import React from 'react';
import SecondSwipper from "../TripsSwipper/TripsSwipper";
import messages from "./messages/messages";

function GamesSwipper() {
    return (
        <div id='games'>
            <SecondSwipper title={messages.games}/>
        </div>
    )
};
export default GamesSwipper;