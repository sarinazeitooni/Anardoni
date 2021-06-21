import React from 'react';
import { Skeleton } from '@material-ui/lab';
import style from './scss/mobile-skeleton.module.scss'
function MobileDetailSkeleton(){
    return(
        <React.Fragment>
            <Skeleton animation="wave" variant="rect" width={'100%'} height={250}/>
            <div className={style['detail-image-skeleton']}>
                <Skeleton animation="wave" variant="circle" width={150} height={150} />
            </div>
            <div className={style['title-skeleton-container-m']}>
                <Skeleton animation="wave" variant="text" width={200} height={50}/>
                <Skeleton animation="wave" variant="text" width={200} height={40}/>
            </div>
        </React.Fragment>
    )
};
export default MobileDetailSkeleton;