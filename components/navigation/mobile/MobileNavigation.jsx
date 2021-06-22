import React, {useEffect, useState} from 'react';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LayersIcon from '@material-ui/icons/Layers';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CategoryTwoToneIcon from '@material-ui/icons/CategoryTwoTone';
import messages from "../messages/messages";
import style from './scss/navigation-mobile.module.scss';
import { useRouter } from 'next/router';
function MobileNavigation(){
    const router = useRouter();
    const [NavItemClass , SetNavItemClass] = useState('');
    useEffect(()=>{
        (router.pathname == '/') ? SetNavItemClass(style.selected) : SetNavItemClass('');
    },[]);
    return(
            <div className={style['navigation-mobile-container']}>
                <ul className={style['item-mobile-container']}>
                        <li className={style['item']}> {messages.search} <SearchTwoToneIcon/></li>
                        <li className={style['item']}>{messages.updates}  <WhatshotIcon/></li>
                        <li className={style.item + " " + NavItemClass}> {messages.apps}<LayersIcon/></li>
                        <li className={style['item']}> <a href='#games'>{messages.games}</a> <CategoryTwoToneIcon/></li>
                </ul>
            </div>
    )
}
export default MobileNavigation;