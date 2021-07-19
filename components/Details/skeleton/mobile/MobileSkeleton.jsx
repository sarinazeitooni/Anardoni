import React from 'react';
import {Skeleton} from '@material-ui/lab';
import style from './scss/mobile-skeleton.module.scss';
function MobileDetailSkeleton() {
    return (
            <div className={style['mobile-skeleton']}>
                <Skeleton animation="wave" variant="rect" width={'100%'} height={250}/>
                <div className={style['mobile-skeleton-title-container']}>
                    <Skeleton animation="wave" variant="circle" width={100} height={100}/>
                </div>
            </div>
    )
};
export default MobileDetailSkeleton;