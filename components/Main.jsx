import React from 'react';
import Navigation from "./navigation/Navigation";
import FirstSwipper from "./FirstSwipper/FirstSwipper";
import TripsSwipper from "./TripsSwipper/TripsSwipper";
import { Provider } from "react-redux";
import store from '../redux/store/store';
function Main(){
    return(
     <div>
         <Provider store={store}>
             <Navigation/>
             <FirstSwipper/>
             <TripsSwipper/>
         </Provider>
     </div>
    )
};
export default Main;