import React from 'react';
import style from './scss/DetailAdImage.module.scss'
function DetailAdImage(){
    return(
        <div className={style['ad-container']}>
            <img className={style.ad} src='https://anardoni.com/img/ads/anargift.gif'/>
        </div>
    )
};
export default DetailAdImage