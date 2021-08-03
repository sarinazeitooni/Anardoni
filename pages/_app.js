import '../styles/globals.css';
import 'swiper/swiper.scss';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/variables.scss';
import {Provider} from "react-redux";
import store from "../redux/store/store";
import React from "react";

function MyApp({Component, pageProps}) {
    return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp;
