import React from 'react';
import style from './scss/DetailsMainImage.module.scss';
import _ from "lodash";
const DetailMainImage = ({item}) => {
    const containerImage=_.get(item,"containerImage","");
    const caption=_.get(item,"caption","");
    return (
        <React.Fragment>
            <div className={style['detail-main-image-container']}>
                <div className={style['darker-back']}/>
                <div className={style['blurred-image']}
                     style={{ backgroundImage: `url(
                      ${containerImage}
                     )` }}/>
                <div className={style['detail-main-image']}
                     style={{ backgroundImage: `url(
                      ${containerImage}
                     ) ` }}
                />
            </div>
            <div className={style.caption}>{caption}</div>
        </React.Fragment>
    )
};
export default DetailMainImage;