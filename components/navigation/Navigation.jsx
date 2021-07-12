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
import {useSelector, useDispatch} from "react-redux";
import swiperAction from "../../redux/action/Swiperaction";
import navigationAction from "../../redux/action/navigationAction";
import useDeviceDetect from "../../customHook/useDeviceDetect";
function Navigation() {
    const isMobile = useDeviceDetect;
    const dispatch = useDispatch();
    const router = useRouter();
    const [navigationBtn, setNavigationBtn] = useState(style.items);
    const [NavItemClass, SetNavItemClass] = useState('');
    const navigationBtnTimeout = useSelector(state => state.navigationBtn);
    console.log(isMobile);
    const btnChange =(btn) => {
        dispatch(navigationAction(btn));
    }
    useEffect(() => {
        setTimeout(() => {
            setNavigationBtn(navigationBtnTimeout);
        }, 100);
    }, [navigationBtnTimeout])
    useEffect(() => {
        (router.pathname == '/') ? SetNavItemClass(style.selected) : SetNavItemClass('');
    }, []);

    return (

        <div className={style['navigation-container']}>
            <ul className={style['item-container']}>
                <button onClick={() => {
                    btnChange('first')
                }} className={navigationBtn == 'first' ? style.selected : style.items}><a
                    href='#home'>{messages.home}</a>
                    <HomeTwoToneIcon/></button>
                <button onClick={() => {
                    btnChange('second')
                }} className={navigationBtn == 'second' ? style.selected : style.items}><a
                    href='#apps'>{messages.apps}</a><LayersIcon/>
                </button>
                <button onClick={() => {
                    btnChange('third')
                }} className={navigationBtn == 'third' ? style.selected : style.items}><a
                    href='#games'>{messages.games}</a><WhatshotIcon/>
                </button>
                <button onClick={() => {
                    btnChange('forth')
                }}  className={navigationBtn == 'forth' ? style.selected : style.items}><a
                    href='#categories'>{messages.categories}</a>
                    <CategoryTwoToneIcon/></button>
                <button onClick={() => {
                    btnChange('fifth')
                }} className={navigationBtn == 'fifth' ? style.selected : style.items}><a
                    href='#search'>{messages.search}</a>
                    <SearchTwoToneIcon/></button>
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