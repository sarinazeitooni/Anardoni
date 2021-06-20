import React from 'react';
import Navigation from "./navigation/Navigation";
import FirstSwipper from "./FirstSwipper/FirstSwipper";
import TripsSwipper from "./TripsSwipper/TripsSwipper";
import FeedBack from "./feedback/feedback";
import { Provider } from "react-redux";
import {BrowserView , isMobile} from 'react-device-detect';
import MainMobile from "./MainMobile";
import store from '../redux/store/store';
function Main(){
    return(
     <div>
         <Provider store={store}>
             <BrowserView>
                 <Navigation/>
                 <FirstSwipper/>
                 <FeedBack/>
                 <TripsSwipper/>
             </BrowserView>
             {isMobile && <MainMobile/>}
         </Provider>
     </div>
    )
};
export default Main;