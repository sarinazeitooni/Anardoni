import React from 'react';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LayersIcon from '@material-ui/icons/Layers';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CategoryTwoToneIcon from '@material-ui/icons/CategoryTwoTone';
import messages from "../messages/messages";
import style from './scss/navigationMobile.module.scss';
function MobileNavigation(){
    return(
        <fragment>
            <div className={style['navigation-mobile-container']}>
                <ul className={style['item-mobile-container']}>
                        <li className={style['mobile-item']}> {messages.search} <SearchTwoToneIcon/></li>
                        <li className={style['mobile-item']}>{messages.updates}  <WhatshotIcon/></li>
                        <li className={style['mobile-item']}> {messages.apps}<LayersIcon/></li>
                        <li className={style['mobile-item']}> {messages.games} <CategoryTwoToneIcon/></li>
                </ul>
            </div>
        </fragment>
    )
}
export default MobileNavigation;