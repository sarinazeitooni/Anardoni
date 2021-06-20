import React from 'react';
import MobileCardContainer from "../../card/mobile/MobileCardContainer";
import {Swiper, SwiperSlide} from 'swiper/react';
import Link from 'next/link';
import style from './swiperMobile.module.scss';
import messages from "../../navigation/messages/messages";
import cardData from "../../../data/CardData";
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
function FirstSwipperMobile() {
    const data = cardData;
    return (
        <>
            <div className={style['swiper-mobile-container']}>
                <div className={style['header']}>
                    <h2 className={style['swiper-title']}>{messages.apps}</h2>
                    <AccountCircleTwoToneIcon fontSize='large' className={style['user-icon']}/>
                </div>
            </div>
            <Swiper spaceBetween={1} slidesPerView={1}>
                {data.map((card) =>
                    <SwiperSlide>
                        <Link href={{
                            pathname: '/cards/[id]',
                            query: {id: card.id}
                        }}>
                            <a><MobileCardContainer containerImage={card.containerImage} subtitle={card.subTitle}
                                                    title={card.title}/></a>
                        </Link>
                    </SwiperSlide>
                )}
            </Swiper>
        </>


    )
};
export default FirstSwipperMobile;