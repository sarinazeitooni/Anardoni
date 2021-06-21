import React, { useState} from 'react';
import _ from "lodash";
import style from './scss/mobile-detail-main-image.module.scss';
import messages from "../items/messages/messages";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Link from 'next/link';
const MobileDetailMainImage = ({item}) => {
    const [navbarFixed, setNavbarFixed] = useState(false);
    const changeColor = () =>{
        (window.scrollY>=120) ? setNavbarFixed(true) : setNavbarFixed(false);
    };
    window.addEventListener('scroll', changeColor);
    const containerImage=_.get(item,"containerImage","");
    const detail=_.get(item,"detailImage","");
    return (
            <div className={style['detail-main-image-mobile-container']}>
                <Link href={{pathname : '/'}}>
                    <a>
                        <div className={style[navbarFixed ? 'scrolled' : 'back-button']}>
                            <ArrowBackIosIcon/>
                            <span>{messages.backBtn}</span>
                        </div>
                    </a>
                </Link>
                <img className={style[ navbarFixed ? 'detail-image-top' : 'none']} src={detail}/>
                <div className={style[ navbarFixed ? 'get-button' : 'none']}>{messages.getbtn}</div>

                <div className={style['detail-main-image-mobile']}
                     style={{ backgroundImage: `url(
                      ${containerImage}
                     ) ` }}
                />
            </div>
    )
};
export default MobileDetailMainImage;