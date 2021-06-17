import Navigation from "../../components/navigation/Navigation";
import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import cardData from "../../data/CardData";
import DetailsContainer from "../../components/Details/DetailsCardContainer";
import { Provider } from "react-redux";
import {BrowserView , isMobile} from 'react-device-detect';
import store from "../../redux/store/store";
import MobileDetail from "../../components/Details/MobileDetail";
function Details(){
    const router = useRouter();
    const { id } = router.query;
    return(
        <Provider store={store}>
            <BrowserView>
                <Navigation/>
                <DetailsContainer card={cardData[id]}/>
            </BrowserView>
            {isMobile && <MobileDetail card={cardData[id]}/>}
        </Provider>
    )
};
export default Details;