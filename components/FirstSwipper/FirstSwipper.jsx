import React,{useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Card from "../card/Card";
import Link from 'next/link';
import cardData from "../../data/CardData";
import style from './scss/first-swipper.module.scss';

const FirstSwipper = () => {
    const [Data,setData] = useState(cardData);
    return (
        <div className={style['swipper-container']}>
            <Swiper spaceBetween={1} slidesPerView={3.1}>
                {Data.map((card) =>
                    <SwiperSlide key={card.id}>
                        <Link href={{
                            pathname: '/cards/[id]',
                            query: {id: card.id}
                        }}>
                            <a>
                                <Card
                                    id={card.id}
                                    title={card.title}
                                    subTitle={card.subTitle}
                                    detailImage={card.detailImage}
                                    containerImage={card.containerImage}/>
                            </a>
                        </Link>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
};
export default FirstSwipper;