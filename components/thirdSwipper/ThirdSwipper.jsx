import {Swiper, SwiperSlide} from 'swiper/react';
import {isMobile} from "react-device-detect";
import style from './scss/third-swipper.module.scss'
import _ from "lodash";
import {useState} from "react";

const ThirdSwipper = ({item}) => {
    const previewImages = _.get(item, "previewImages", ['']);
    const [spaces , setSpaces] = useState(1);
    const [slides , setSlides] = useState(isMobile ? 1.6 : 3.7);
    const [width , setWidth] = useState(isMobile ? 251 : '280px');
    const [height , setHeight] = useState(isMobile ? 444 : 490);
    return (
        <div className={style['screenshot-container']}>
            <Swiper spaceBetween={spaces} slidesPerView={slides}>
                {previewImages.map((item) => <SwiperSlide>
                    <img className={style['screenshot']} width={width} height={height} src={item}/>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
};
export default ThirdSwipper;