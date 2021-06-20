import React from 'react';
import { Skeleton } from '@material-ui/lab';
import style from './scss/Mobile-skeleton.module.scss'
const MobileMySkeleton=(props)=>{
    let slidenum = [] ;
    for (let index = 1; index < props.slides; index++) {
        slidenum.push(index);
    }
    return(
        slidenum.map((slide)=>{
            return(
                <div className={style['skeleton-container']}>
                    <Skeleton animation="wave" variant="circle" width={50} height={50} />
                    <Skeleton animation="wave" variant="text" width={200} height={20} />
                </div>
            )
        })
    )
};

export default MobileMySkeleton;