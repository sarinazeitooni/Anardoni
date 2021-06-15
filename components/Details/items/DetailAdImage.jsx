import React from 'react';
import style from './scss/DetailAdImage.module.scss'
function DetailAdImage(){
    return(
        <div className={style.AdContainer}>
            <img className={style.Ad} src='https://anardoni.com/img/ads/anargift.gif'/>
        </div>
    )
};
export default DetailAdImage