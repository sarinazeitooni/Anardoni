import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Card from "../card/Card";
import Link from 'next/link';
import cardData from "../../data/CardData";
import { BrowserView, MobileView,isMobile} from "react-device-detect";
import style from './scss/FirstSwipper.module.scss';
const FirstSwipper = () => {
    let data = cardData;
    let viewportslide = isMobile ? 1 : 3;
    let viewportspace = isMobile ? 0 : 1;
    return (
        <div className={style.swipperContainer} >
                <div className={style.line}></div>
                <Swiper spaceBetween={viewportspace} slidesPerView={viewportslide}>
                    {data.map((card) =>
                        <SwiperSlide>
                        <Link href={{
                            pathname : '/cards/[id]',
                            query : {id : card.id}
                        }}>
                            <a>
                            <Card id={card.id} title={card.title} subTitle={card.subTitle}
                                  detailImage={card.detailImage} containerImage={card.containerImage}/>
                            </a>
                        </Link>
                        </SwiperSlide>
                    )}
                </Swiper>
        </div>
    )
};
export default FirstSwipper;