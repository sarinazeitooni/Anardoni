import React from 'react';
import { Skeleton } from '@material-ui/lab';
import style from './scss/mobile-skeleton.module.scss'
function MobileDetailSkeleton(){
    return(
        <>
            <Skeleton animation="wave" variant="rect" width={'100%'} height={250}/>
            <Skeleton animation="wave" variant="circle" width={150} height={150} />
            <div className={style['title-skeleton-container-m']}>
            </div>

        </>
    )
};
export default MobileDetailSkeleton;