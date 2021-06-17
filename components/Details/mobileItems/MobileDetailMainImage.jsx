import React from 'react';
import _ from "lodash";
import style from './scss/MobileDetailMainImage.module.scss';
import messages from "../items/messages/messages";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Link from 'next/link';
const MobileDetailMainImage = ({item}) => {
    let element = document.getElementsByClassName('back-button');
    const handleScroll = () => {
        if (window.scrollY > 60) {
            element.className = "scrolled";
            console.log(element)
        } else {
            element.className = "back-button";
        }
    };
    window.addEventListener("scroll", handleScroll);
    const containerImage=_.get(item,"containerImage","");
    return (
        <React.Fragment>
            <div className={style['detail-main-image-mobile-container']}>
                <Link href={{
                    pathname : '/'
                }}>
                    <a>
                        <div className={style['back-button']}> <ArrowBackIosIcon/><span>{messages.backBtn}</span></div>
                    </a>
                </Link>
                <div className={style['detail-main-image-mobile']}
                     style={{ backgroundImage: `url(
                      ${containerImage}
                     ) ` }}
                />
            </div>
        </React.Fragment>
    )
};
export default MobileDetailMainImage;