import React, {useEffect, useState} from 'react';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LayersIcon from '@material-ui/icons/Layers';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CategoryTwoToneIcon from '@material-ui/icons/CategoryTwoTone';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import messages from "./messages/messages";
import style from './scss/navigation.module.scss';
import {useRouter} from 'next/router';

function Navigation() {
    const router = useRouter();
    const [NavItemClass , SetNavItemClass] = useState('');
    useEffect(()=>{
        (router.pathname == '/') ? SetNavItemClass(style.selected) : SetNavItemClass('');
    },[]);
    return (
        <div className={style['navigation-container']}>
            <ul className={style['item-container']}>
                <button className={style.item}>{messages.home} <HomeTwoToneIcon/></button>
                <button className={style.item + " " + NavItemClass}> {messages.apps}<LayersIcon/></button>
                <button className={style.item}><a href='#games'>{messages.games}</a><WhatshotIcon/></button>
                <button className={style.item}> {messages.categories} <CategoryTwoToneIcon/></button>
                <button className={style.item}> {messages.search} <SearchTwoToneIcon/></button>
            </ul>
            <div className={style['log-in-container']}>
                <button className={style['right-btn']}>{messages.signup}<AddCircleIcon/></button>
                <span className={style['black-circle']}></span>
                <button className={style['left-btn']}><VpnKeyIcon/>{messages.login}</button>
            </div>
        </div>
    )
}

export default Navigation;