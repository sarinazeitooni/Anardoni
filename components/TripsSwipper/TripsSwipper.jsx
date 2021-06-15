import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import style from './scss/TripsSwipper.module.scss'
import smallCardContainer from "./smallCards/items/smallCardContainer";
import {isMobile} from "react-device-detect";
import { useSelector , useDispatch } from "react-redux";
import MySkeleton from "../skeleton/Skeleton";
import SmallCardContainer from "../smallCard/SmallCardContainer";
import swiperAction from "../../redux/action/action";
function SecondSwipper(){
    const [swipperData , setSwipperData] = useState(null);
    const dispatch = useDispatch();
    const swipperDataForTimeOut = useSelector(state => state.swipper);
    useEffect(()=>{
        dispatch(swiperAction());
        setTimeout(()=>{
            setSwipperData(swipperDataForTimeOut);

        },1000);
    },[swipperDataForTimeOut])

    let viewport = isMobile ? 2 : 8;
    return (
        <div className={style.secondSwipperContainer}>
            <div className={style.swipperTitle}>
                <div className={style.rightTitle}>سفرهای ضروری</div>
                <div className={style.leftTitle}>بیشتر</div>
            </div>
                <Swiper spaceBetween={0} slidesPerView={viewport}>
                    {!swipperData && (
                        <MySkeleton slides={viewport}/>
                    )}
                    {swipperData && (swipperData.map((item)=>{
                        return(
                            <SwiperSlide>
                                <SmallCardContainer title={item.title} detail={item.detail} cardImage={item.url}/>
                            </SwiperSlide>
                        )
                    }))
                    }
                </Swiper>
        </div>)
};
export default SecondSwipper;