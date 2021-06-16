import React from 'react';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LayersIcon from '@material-ui/icons/Layers';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CategoryTwoToneIcon from '@material-ui/icons/CategoryTwoTone';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import messages from "./messages/messages";
import { BrowserView, MobileView} from "react-device-detect";
import style from './scss/navigation.module.scss';
import { useRouter } from 'next/router'
function Navigation(){
    const router = useRouter();
    let navItemClass;
    (router.pathname == '/') ? navItemClass = style.selected : navItemClass = '';
    return(
        <fragment>
            <div className={style['navigation-container']}>
                <ul className={style['item-container']}>
                    <BrowserView>
                        <li className={style.item}>{messages.home} <HomeTwoToneIcon/></li>
                        <li className={style.item + " " + navItemClass}> {messages.apps}<LayersIcon/></li>
                        <li className={style.item}>{messages.games}  <WhatshotIcon/></li>
                        <li className={style.item}> {messages.categories} <CategoryTwoToneIcon/></li>
                        <li className={style.item}> {messages.search} <SearchTwoToneIcon/></li>
                    </BrowserView>
                    <MobileView>
                        <li>
                            <HomeTwoToneIcon/>
                            <LayersIcon/>
                            <WhatshotIcon/>
                            <CategoryTwoToneIcon/>
                            <SearchTwoToneIcon/>
                        </li>
                    </MobileView>
                </ul>
                <div className={style['log-in-container']}>
                    <button className={style['right-btn']}>{messages.signup}<AddCircleIcon/></button>
                    <span className={style['black-circle']}></span>
                    <button className={style['left-btn']}><VpnKeyIcon/>{messages.login}</button>
                </div>
            </div>
        </fragment>
    )
}
export default Navigation;