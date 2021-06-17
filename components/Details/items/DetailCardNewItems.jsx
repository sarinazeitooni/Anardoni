import {MobileView, BrowserView} from 'react-device-detect';
import style from './scss/DetailCardNewItems.module.scss';
import messages from "./messages/messages";
import _ from "lodash";
const DetailCardNewItems = ({item})=>{
    const version=_.get(item,"version","");
    const newItems=_.get(item,"newItems",['']);
    const lastUpdate = _.get(item, "lastUpdate","");
    return(
        <div>
            <div className={style['whats-new-container']}>
                <div className={style['new-items']}>
                    <div className={style['preview-title']}>{messages.whatsNew}</div>
                    <div className={style['about-items-container']}>
                        {
                            newItems.map((item) => {
                                return (
                                    <li className={style['about-items']}>{item} </li>
                                )
                            })
                        }
                    </div>
                    <MobileView>
                        <div className={style['right-text']}>{messages.version}{version}
                        </div>
                    </MobileView>
                </div>
                <div className={style.versions}>
                    <div className={style['colored-text']}>{messages.versionHistory}</div>
                    <BrowserView>
                        <div className={style.version}> {messages.version} {version}</div>
                    </BrowserView>
                    <MobileView>
                        <div className={style['last-update-container']}>
                            {lastUpdate}
                        </div>
                    </MobileView>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}
export default DetailCardNewItems;