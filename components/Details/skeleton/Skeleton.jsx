import React from 'react';
import {Skeleton} from '@material-ui/lab';
import style from './scss/detail-skeleton.module.scss';

function DetailSkeleton() {
    const wave = new Array(3);
    return (
        <React.Fragment>
            <div className={style['main-image-skeleton']}>
                <Skeleton animation="wave" variant="rect" width={500} height={310}/>
            </div>
            <div className={style['caption-skeleton']}>
                <Skeleton animation="wave" variant="text" width={950} height={60}/>
            </div>
            <div className={style['title-skeleton-container']}>
                <Skeleton animation="wave" variant="circle" width={250} height={250}/>
                <div className={style['title-container']}>
                    <Skeleton animation="wave" variant="text" width={100} height={25}/>
                    <Skeleton animation="wave" variant="text" width={200} height={20}/>
                </div>
            </div>
            <div className={style['swipper-skeleton-title']}>
                <Skeleton animation="wave" variant="text" width={100} height={25}/>
            </div>
            <div className={style['swiper-skeleton-container']}>
                {wave.map((item)=>{return(
                    <Skeleton key={item} animation="wave" variant="rect" width={250} height={320}/>
                )})}
                <Skeleton animation="wave" variant="rect" width={150} height={320}/>
            </div>
        </React.Fragment>
    )
};
export default DetailSkeleton;