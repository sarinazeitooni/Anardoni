import React , {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SmallCardContainer from "../smallCard/SmallCardContainer";
import {BrowserView, MobileView} from "react-device-detect";
import { useSelector , useDispatch } from "react-redux";
import MySkeleton from "../skeleton/Skeleton";
function SecondSwipper(){
    const [swipperData , setSwipperData] = useState(null);
    const dispatch = useDispatch();
    dispatch({
        type: "swipper"

    });
    const swipperDataForTimeOut = useSelector(state => state.swipper);
    setTimeout(()=>{
        setSwipperData(swipperDataForTimeOut);
    },3000)
    return (
        <div className={'second-swipper-container'}>
            <div className={"swipper-title"}>
                <div className={'right-title'}>سفرهای ضروری</div>
                <div className={'left-title'}>بیشتر</div>
            </div>
            <BrowserView>
                <Swiper spaceBetween={0} slidesPerView={8}>
                    {!swipperData && (
                        <MySkeleton slides={8}/>
                    )}
                    {swipperData && (swipperData.map((item)=>{
                        return(
                            <SwiperSlide>
                                <SmallCardContainer title={item.title} detail={item.detail} cardImage={item.url} />
                            </SwiperSlide>
                        )
                    }))
                    }
                </Swiper>
            </BrowserView>
            <MobileView>
                <Swiper spaceBetween={0} slidesPerView={2}>
                    {!swipperData && (
                        <MySkeleton slides={2}/>
                    )}
                    {swipperData && (swipperData.map((item)=>{
                        return(
                            <SwiperSlide>
                                <SmallCardContainer title={item.title} detail={item.detail}
                                                    cardImage={item.url} />
                            </SwiperSlide>
                        )
                    }))
                    }
                </Swiper>
            </MobileView>
        </div>)
};
export default SecondSwipper;