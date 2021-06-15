import React from 'react';
import style from './scss/DetailCardLink.module.scss'
function DetailCardLink(){
    return(
        <div className={style.LinkContainer}>
            <h3 className={style.linkTitle}>لینک های مفید</h3>
            <div className={style.Link}>وب اپلیکیشن   <span> > </span>   </div>
        </div>
    )
};
export default DetailCardLink;