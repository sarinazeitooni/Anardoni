import React, {useEffect, useState} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import messages from "./messages/messages";
import style from './scss/navigation.module.scss';
import {useRouter} from 'next/router';
import {useSelector, useDispatch} from "react-redux";
import navigationAction from "../../redux/action/navigationAction";
import useViewPort from "../../customHook/useDeviceDetect"

import Data from './messages/data';

function Navigation() {
    const isMobile = useViewPort();
    const dispatch = useDispatch();
    const router = useRouter();
    const [navigationBtn, setNavigationBtn] = useState(style.items);
    const [NavItemClass, SetNavItemClass] = useState('');
    const navigationBtnTimeout = useSelector(state => state.navigationBtn);
    console.log(isMobile);
    const btnChange = (btn) => {
        dispatch(navigationAction(btn));
    }
    useEffect(() => {
        setTimeout(() => {
            setNavigationBtn(navigationBtnTimeout);
        }, 100);
    }, [navigationBtnTimeout]);
    useEffect(() => {
        (router.pathname == '/') ? SetNavItemClass(style.selected) : SetNavItemClass('');
    }, []);
    return (
        <div className={style['navigation-container']}>
            <ul className={style['item-container']}>
                {Data.map((item) => {
                        return (
                            <button onClick={() => {
                                btnChange(item.number)
                            }} className={navigationBtn == item.number ? style.selected : style.items}><a
                                href={item.href}>{item.text}</a>{item.icon}</button>
                )
                })}
            </ul>
            <div className={style['log-in-container']}>
                <button className={style['right-btn']}>{messages.signup}<AddCircleIcon/></button>
                <span className={style['black-circle']}/>
                <button className={style['left-btn']}><VpnKeyIcon/>{messages.login}</button>
            </div>
        </div>
    )
}

export default Navigation;