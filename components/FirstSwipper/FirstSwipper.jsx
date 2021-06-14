import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Card from "../card/Card";
import Link from 'next/link';
import cardData from "../../data/CardData";
import { BrowserView, MobileView} from "react-device-detect";
import style from './scss/FirstSwipper.module.scss';
import {useRouter} from "next/router";
const FirstSwipper = () => {
    let data = cardData;
    const router=useRouter()
    return (
        <div className={style.swipperContainer} >
            <BrowserView>
                <div className={style.line}></div>
                <Swiper spaceBetween={1} slidesPerView={3}>
                    {data.map((card) =>
                        <SwiperSlide>
                        <Link href={"www.google.com"}>
                            <a>
                            <Card id={card.id} title={card.title} subTitle={card.subTitle}
                                  detailImage={card.detailImage} containerImage={card.containerImage}/>
                            </a>
                        </Link>
                        </SwiperSlide>
                    )}

                </Swiper>
            </BrowserView>
            <MobileView>
                <div className={style.line}></div>
                <Swiper spaceBetween={0} slidesPerView={1}>
                    {data.map((card) => <SwiperSlide>
                        <Link to={"/" + card.id}>
                            <Card id={card.id} title={card.title} subTitle={card.subTitle}
                                  detailImage={card.detailImage} containerImage={card.containerImage}/>
                        </Link>
                    </SwiperSlide>)}
                </Swiper>
            </MobileView>
        </div>
    )
};
export default FirstSwipper;