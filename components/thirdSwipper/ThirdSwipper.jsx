import { Swiper, SwiperSlide } from 'swiper/react';
import {isMobile} from "react-device-detect";
import style from './scss/ThirdSwipper.module.scss'
import _ from "lodash";
const ThirdSwipper = ({item})=>{
    const previewImages=_.get(item,"previewImages",['']);
    let spaces = isMobile ? 1 : 1;
    let slides = isMobile ? 1.6 : 3.7;
    let width = isMobile ? 250 : '280px';
    let height = isMobile ? 450 : 490;
    return(
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