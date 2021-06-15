import React from 'react';
import style from './scss/DetailCardInformation.module.scss'
function DetailCardInformation({item}){
    return(
    return(
        <div>
            <div className="preview">
                <span className='preview-title'>
                    اطلاعات
                </span>
                <div className="about-container">
                    {item.information.map((item)=>{
                        return(
                            <div>
                                <div className='about'>
                                    <div className='info-title'>{item.Title}</div>
                                    <span className='info-items'style={{color:item.color}}>{item.description}</span>
                                </div>
                                <MobileView><div className='line'></div></MobileView>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
    )
};
export default DetailCardInformation