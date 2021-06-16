import {MobileView, BrowserView} from 'react-device-detect';
import style from './scss/DetailCardNewItems.module.scss';
import messages from "./messages/messages";
const DetailCardNewItems = ({item})=>{
    const data = item.newItems;
    return(
        <div>
            <div className={style['whats-new-container']}>
                <div className={style['new-items']}>
                    <div className={style['preview-title']}>{messages.whatsNew}</div>
                    <div className={style['about-items-container']}>
                        {
                            data.map((item) => {
                                return (
                                    <li className={style['about-items']}>{item} </li>
                                )
                            })
                        }
                    </div>
                    <MobileView>
                        <div className={style['right-text']}>{messages.version}{item.version}
                        </div>
                    </MobileView>
                </div>
                <div className={style.versions}>
                    <div className={style['colored-text']}>{messages.versionHistory}</div>
                    <BrowserView>
                        <div className={style.version}> {messages.version} {item.version}</div>
                    </BrowserView>
                    <MobileView>
                        <div className={style['last-update-container']}>
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