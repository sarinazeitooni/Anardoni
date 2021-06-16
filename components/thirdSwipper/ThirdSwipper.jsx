import { Swiper, SwiperSlide } from 'swiper/react';
import ThirdSwipperData from "../../data/ThirdSwipperData";
import { BrowserView, MobileView, isMobile} from "react-device-detect";
import style from './scss/ThirdSwipper.module.scss'
const ThirdSwipper = ()=>{
    let data = ThirdSwipperData;
    let spaces = isMobile ? 15 : 1;
    let slides = isMobile ? 3 : 4;
    let width = isMobile ? 65 : '260px';
    let height = isMobile ? 140 : 490;
    return(
        <div className={style['screenshot-container']}>
                <Swiper spaceBetween={spaces} slidesPerView={slides}>
                    {data.map((item) => <SwiperSlide>
                        <img className={style['screenshot']} width={width} height={height} src={item.url}/>
                    </SwiperSlide>)}
                </Swiper>
        </div>
    )
};
export default ThirdSwipper;