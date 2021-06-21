import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import swiperAction from "../../../redux/action/action";
import style from './scss/trip-swipper-mobile.module.scss'
import messages from "../messages/messages";
import MobileMySkeleton from "../../skeleton/mobile/Skeleton";
import SmallCardMobile from "../../smallCard/mobile/SmallCardMobile";
import {Swiper, SwiperSlide} from 'swiper/react';
function TripSwipperMobile ({title}){
    const [swipperData , setSwipperData] = useState(null);
    const dispatch = useDispatch();
    const swipperDataForTimeOut = useSelector(state => state.swipper);
    const devider = 3;
    let result;
    useEffect(()=>{
        dispatch(swiperAction());
        setTimeout(()=>{
            setSwipperData(swipperDataForTimeOut);

        },1000);
    },[swipperDataForTimeOut]);
    swipperData ? (result = new Array(Math.ceil(swipperData.length / devider))
                .fill().map(_ => swipperData.splice(0, devider))
        ) : '';
    useEffect(()=>{

    },[result]);

    return(
        <div className={style['second-swipper-mobile-container']}>
            <div className={style['swipper-mobile-title']}>
                <div className={style['right-mobile-title']}>{title}</div>
                <div className={style['left-mobile-title']}>{messages.more}</div>
            </div>
                <div className={style['smallcards-mobile-container']}>
                    <Swiper spaceBetween={0} slidesPerView={1}>
                    {!result && (
                        <MobileMySkeleton slides={4}/>
                    )}
                    {result && (result.map((item,index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <SmallCardMobile items={item}/>
                            </SwiperSlide>
                            )
                        }))
                    }
                    </Swiper>
                </div>
        </div>
    )
};
export default TripSwipperMobile