import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import swiperAction from "../../../redux/action/action";
import style from './scss/TripSwipperMobile.module.scss'
import messages from "../messages/messages";
import MySkeleton from "../../skeleton/Skeleton";
import SmallCardMobile from "../../smallCard/mobile/SmallCardMobile";
import {Swiper, SwiperSlide} from 'swiper/react';
function TripSwipperMobile (){
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
    return(
        <div className={style['second-swipper-mobile-container']}>
            <div className={style['swipper-mobile-title']}>
                <div className={style['right-mobile-title']}>{messages.trips}</div>
                <div className={style['left-mobile-title']}>{messages.more}</div>
            </div>
                <div className={style['smallcards-mobile-container']}>
                    <Swiper spaceBetween={0} slidesPerView={1}>
                    {!result && (
                        <MySkeleton slides={3}/>
                    )}
                    {result && (result.map((item)=>{
                        return(
                            <SwiperSlide>
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