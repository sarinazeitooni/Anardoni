import React from 'react';
import Navigation from "./navigation/Navigation";
import FirstSwipper from "./FirstSwipper/FirstSwipper";
import TripsSwipper from "./TripsSwipper/TripsSwipper";
import FeedBack from "./feedback/feedback";
import { Provider } from "react-redux";
import {BrowserView , isMobile} from 'react-device-detect';
import messages from "./TripsSwipper/messages/messages";
import MainMobile from "./MainMobile";
import store from '../redux/store/store';
import GamesSwipper from "./gamesSwipper/GamesSwipper";
function Main(){
    return(
     <div>
         <Provider store={store}>
             <BrowserView>
                 <Navigation/>
                 <FirstSwipper/>
                 <FeedBack/>
                 <TripsSwipper title={messages.trips}/>
                 <GamesSwipper/>
             </BrowserView>
             {isMobile && <MainMobile/>}
         </Provider>
     </div>
    )
};
export default Main;