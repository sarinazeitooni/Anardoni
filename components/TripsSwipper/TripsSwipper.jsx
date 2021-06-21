import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import style from './scss/TripsSwipper.module.scss';
import messages from "./messages/messages";
import { useSelector , useDispatch } from "react-redux";
import MySkeleton from "../skeleton/Skeleton";
import SmallCardContainer from "../smallCard/SmallCardContainer";
import swiperAction from "../../redux/action/action";
function SecondSwipper({title}){
    const [swipperData , setSwipperData] = useState(null);
    const dispatch = useDispatch();
    const swipperDataForTimeOut = useSelector(state => state.swipper);
    useEffect(()=>{
        dispatch(swiperAction());
        setTimeout(()=>{
            setSwipperData(swipperDataForTimeOut);

        },1000);
    },[swipperDataForTimeOut])
    return (
        <div className={style['second-swipper-container']}>
            <div className={style['swipper-title']}>
                <div className={style['right-title']}>{title}</div>
                <div className={style['left-title']}><span>{messages.more}</span></div>
            </div>
                <Swiper spaceBetween={0} slidesPerView={7}>
                    {!swipperData && (
                        <MySkeleton slides={10}/>
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