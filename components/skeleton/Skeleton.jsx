import React from 'react';
import { Skeleton } from '@material-ui/lab';

const MySkeleton=(props)=>{
    let slidenum = [] ;
    for (let index = 1; index < props.slides; index++) {
        slidenum.push(index);
    }
    return(
        slidenum.map((slide)=>{
            return(
                <div style={{display: "inline-block" , margin : "6px"}}>
                    <Skeleton animation="wave" variant="circle" width={100} height={100} />
                    <br/>
                    <Skeleton animation="wave" variant="text" width={100} height={20} />
                    <Skeleton animation="wave" variant="rect" width={100} height={20} />
                </div>
            )
        })
    )
};

export default MySkeleton;