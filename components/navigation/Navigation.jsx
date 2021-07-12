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
import swiperAction from "../../redux/action/action";
import navigationAction from "../../redux/action/navigationAction";
import useDeviceDetect from "../../customHook/useDeviceDetect";
function Navigation() {
    const isMobile = useDeviceDetect;
    const dispatch = useDispatch();
    const router = useRouter();
    const [navigationBtn, setNavigationBtn] = useState(style.items);
    const [NavItemClass, SetNavItemClass] = useState('');
    const navigationBtnTimeout = useSelector(state => state.navigationBtn);
    const [styles, setStyles] = useState(navigationBtn ? style.items : style.selected);
    console.log(isMobile);
    const btnChange = () => {
        dispatch(navigationAction());
        setStyles(navigationBtn.item ? style.items : style.selected)
    }
    useEffect(() => {
        setTimeout(() => {
            setNavigationBtn(navigationBtnTimeout);
        }, 100);
    }, [navigationBtnTimeout])
    useEffect(() => {
        (router.pathname == '/') ? SetNavItemClass(style.selected) : SetNavItemClass('');
    }, []);
    useEffect(()=>{
        setStyles(navigationBtn ? style.items : style.selected)
    },[navigationBtn])
    return (

        <div className={style['navigation-container']}>
            <ul className={style['item-container']}>
                <button onClick={() => {
                    btnChange()
                }} className={style.items + " " + styles}><a
                    href='#home'>{messages.home}</a>
                    <HomeTwoToneIcon/></button>
                <button onClick={() => {
                    btnChange()
                }}
                        className={style.items + " " + styles}><a
                    href='#apps'>{messages.apps}</a><LayersIcon/>
                </button>
                <button onClick={() => {
                    btnChange()
                }} className={style.items + " " + styles}><a
                    href='#games'>{messages.games}</a><WhatshotIcon/>
                </button>
                <button onClick={() => {
                    btnChange()
                }} className={style.items + " " + styles}><a
                    href='#categories'>{messages.categories}</a>
                    <CategoryTwoToneIcon/></button>
                <button onClick={() => {
                    btnChange()
                }} className={style.items + " " + styles}><a
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