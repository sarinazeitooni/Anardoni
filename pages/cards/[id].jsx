import Navigation from "../../components/navigation/Navigation";
import React, {useState,useEffect} from 'react';
import {useRouter} from "next/router";
import cardData from "../../data/CardData";
import DetailsContainer from "../../components/Details/DetailsCardContainer";
import { Provider } from "react-redux";
import {BrowserView,MobileView , isMobile} from 'react-device-detect';
import store from "../../redux/store/store";
import MobileDetail from "../../components/Details/MobileDetail";
import Skeleton from "../../components/Details/skeleton/Skeleton";
import MobileDetailSkeleton from "../../components/Details/skeleton/mobile/MobileSkeleton";
import browser from 'browser-detect';
function Details(){
    const Browser = browser().name;
    const router = useRouter();
    const { id } = router.query;
    const [detailData , setDetailData] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            setDetailData(cardData[id])

        },1000);
    }, [detailData])
    return(
        <Provider store={store}>
            <BrowserView>
                <Navigation/>
                {!detailData && <Skeleton/> }
                {detailData && <DetailsContainer card={detailData}/>}
            </BrowserView>
            <MobileView>
                {!detailData && <MobileDetailSkeleton/>}
                {detailData &&
                    (Browser=='safari')
                        ?
                        <div style={{letterSpacing: '-5px'}}><MobileDetail card={detailData}/></div>
                        :
                        <div style={{letterSpacing: '18px'}}><MobileDetail card={detailData}/></div>
                }
            </MobileView>
        </Provider>
    )
};
export default Details;