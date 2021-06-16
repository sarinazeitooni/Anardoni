import Navigation from "../../components/navigation/Navigation";
import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import cardData from "../../data/CardData";
import DetailsContainer from "../../components/Details/DetailsCardContainer";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
function Details(){
    const router = useRouter();
    const { id } = router.query;
    return(
        <Provider store={store}>
            <Navigation/>
            <DetailsContainer card={cardData[id]}/>
        </Provider>
    )
};
export default Details;