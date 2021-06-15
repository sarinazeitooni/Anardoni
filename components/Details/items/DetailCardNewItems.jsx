import {MobileView, BrowserView} from 'react-device-detect';
import style from './scss/DetailCardNewItems.module.scss';
const DetailCardNewItems = ({item})=>{
    const data = item.newItems;
    return(
        <div>
            <div className={style.whatsNewContainer}>
                <div className={style.newItems}>
                    <div className={style.previewTitle}>جدید چه خبره؟</div>
                    <div className={style.aboutItemsContainer}>
                        {/*{*/}
                        {/*    data.map((item) => {*/}
                        {/*        return (*/}
                        {/*            <li className={style.aboutItems}>*/}
                        {/*                {item}*/}
                        {/*            </li>*/}
                        {/*        )*/}
                        {/*    })*/}
                        {/*}*/}
                    </div>
                    <MobileView>
                        <div className={style.rightText}>
                            نسخه  {item.version}
                        </div>
                    </MobileView>
                </div>
                <div className={style.versions}>
                    <div className={style.coloredText}>
                        نمایش تاریخچه ورژن ها
                    </div>
                    <BrowserView>
                        <div className={style.version}> نسخه {item.version}</div>
                    </BrowserView>
                    <MobileView>
                        <div style={{fontSize:"10px"}}>
                            {item.lastUpdate}
                        </div>
                    </MobileView>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}
export default DetailCardNewItems;