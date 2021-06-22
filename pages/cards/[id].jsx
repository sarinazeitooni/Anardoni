import Navigation from "../../components/navigation/Navigation";
import React, {useState,useEffect} from 'react';
import {useRouter} from "next/router";
import cardData from "../../data/CardData";
import DetailsContainer from "../../components/Details/DetailsCardContainer";
import { Provider } from "react-redux";
import {isMobile} from 'react-device-detect';
import store from "../../redux/store/store";
import MobileDetail from "../../components/Details/MobileDetail";
import Skeleton from "../../components/Details/skeleton/Skeleton";
import MobileDetailSkeleton from "../../components/Details/skeleton/mobile/MobileSkeleton";
function Details(){
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
            {isMobile ? <React.Fragment>
                {detailData ? <MobileDetail card={detailData}/> : <MobileDetailSkeleton/>}
            </React.Fragment>
            :
            <React.Fragment>
                <Navigation/>
                {detailData ? <DetailsContainer card={detailData}/> : <Skeleton/>}
            </React.Fragment>
            }
        </Provider>
    )
};
export default Details;
