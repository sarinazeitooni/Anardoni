import React from "react";
import style from './scss/small-card-mobile.module.scss';
import messages from "../../TripsSwipper/messages/messages";
const SmallCardContainer = ({items})=>{
    return(
        <React.Fragment>
            {
                items.map((item)=>{
                    return(
                        <div key={item.id} className={style['card-without-container-mobile']}>
                            <div className={style['card-without-container-image-mobile']}>
                                <img src={item.url}/>
                            </div>
                            <div className={style['card-without-container-detail-mobile']}>
                                <h4>{item.title}</h4>
                                <p>{item.subtitle}</p>
                                <div className={style['get-button']}>{messages.getButton}</div>
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}
export default SmallCardContainer