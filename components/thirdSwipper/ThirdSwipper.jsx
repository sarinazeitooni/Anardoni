import { Swiper, SwiperSlide } from 'swiper/react';
import ThirdSwipperData from "../../data/ThirdSwipperData";
import { BrowserView, MobileView} from "react-device-detect";
const ThirdSwipper = ()=>{
    let data = ThirdSwipperData;
    return(
        <div className= "screenshot-container">
            <BrowserView>
                <Swiper spaceBetween={1} slidesPerView={4}>
                    {data.map((item) => <SwiperSlide>
                        <img className="screenshot" width="80%" height={350} src={item.url}/>
                    </SwiperSlide>)}
                </Swiper>
            </BrowserView>
            <MobileView>
                <Swiper spaceBetween={15} slidesPerView={3}>
                    {data.map((item) => <SwiperSlide>
                        <img className="screenshot" width={65} height={140} src={item.url}/>
                    </SwiperSlide>)}
                </Swiper>
            </MobileView>
        </div>
    )
};
export default ThirdSwipper;