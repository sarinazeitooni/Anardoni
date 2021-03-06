import React, {useState} from 'react';
import {Skeleton} from '@material-ui/lab';
import style from './scss/skeleton.module.scss'
const SwiperSkeleton = (props) => {
    let slideNum = [];
    for (let index = 1; index < props.slides; index++) {
        slideNum.push(index);
    }
    return (
        <React.Fragment>
            {slideNum.map((index) => {
                return (
                    <div key={index} className={style['skeleton-container']}>
                        <Skeleton animation="wave" variant="circle" width={100} height={100}/>
                        <br/>
                        <Skeleton animation="wave" variant="text" width={100} height={20}/>
                        <Skeleton animation="wave" variant="rect" width={100} height={20}/>
                    </div>
                )
            })}
        </React.Fragment>
    )
};

export default SwiperSkeleton;