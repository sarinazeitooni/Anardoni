import React from 'react';
import { Skeleton } from '@material-ui/lab';
import style from './scss/mobile-skeleton.module.scss'
function MobileDetailSkeleton(){
    return(
        <>
            <Skeleton animation="wave" variant="rect" width={'100%'} height={250}/>
            <div className={style['title-skeleton-container-m']}>
                <Skeleton animation="wave" variant="text" width={100} height={25} />
                <Skeleton animation="wave" variant="text" width={200} height={20} />
            </div>

        </>
    )
};
export default MobileDetailSkeleton;