import React from 'react';
import style from './scss/DetailsMainImage.module.scss';
const DetailMainImage = ({item}) => {
    return (
        <fragment>
            <div className={style.detailMainImageContainer}>
                <div className={style.darkerBack}></div>
                <div className={style.blurredImage}
                     style={{ backgroundImage: `url(
                      ${item.containerImage}
                     )` }}></div>
                <div className={style.detailMainImage}
                     style={{ backgroundImage: `url(
                      ${item.containerImage}
                     ) ` }}
                ></div>
            </div>
            <div className={style.caption}>
                {item.caption}
            </div>
        </fragment>
    )
};
export default DetailMainImage;