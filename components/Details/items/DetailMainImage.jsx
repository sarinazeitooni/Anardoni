import React from 'react';
import style from './scss/DetailsMainImage.module.scss';
const DetailMainImage = ({item}) => {
    return (
        <fragment>
            <div className={style['detail-main-image-container']}>
                <div className={style['darker-back']}></div>
                <div className={style['blurred-image']}
                     style={{ backgroundImage: `url(
                      ${item.containerImage}
                     )` }}></div>
                <div className={style['detail-main-image']}
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