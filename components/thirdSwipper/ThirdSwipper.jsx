import { Swiper, SwiperSlide } from 'swiper/react';
import ThirdSwipperData from "../../data/ThirdSwipperData";
import { BrowserView, MobileView} from "react-device-detect";
import style from './scss/ThirdSwipper.module.scss'
const ThirdSwipper = ()=>{
    let data = ThirdSwipperData;
    return(
        <div className={style.screenshotContainer}>
            <BrowserView>
                <Swiper spaceBetween={1} slidesPerView={4}>
                    {data.map((item) => <SwiperSlide>
                        <img className={style.screenshot} width="260px" height={490} src={item.url}/>
                    </SwiperSlide>)}
                </Swiper>
            </BrowserView>
            <MobileView>
                <Swiper spaceBetween={15} slidesPerView={3}>
                    {data.map((item) => <SwiperSlide>
                        <img className={style.screenshot} width={65} height={140} src={item.url}/>
                    </SwiperSlide>)}
                </Swiper>
            </MobileView>
        </div>
    )
};
export default ThirdSwipper;