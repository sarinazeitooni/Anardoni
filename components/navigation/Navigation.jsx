import React from 'react';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LayersIcon from '@material-ui/icons/Layers';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CategoryTwoToneIcon from '@material-ui/icons/CategoryTwoTone';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { BrowserView, MobileView} from "react-device-detect";
import style from './scss/navigation.module.scss';
function Navigation(){
    return(
        <fragment>
            <div className={style.navigationContainer}>
                <ul className={style.itemContainer}>
                    <BrowserView>
                        <li className={style.item}> خانه  <HomeTwoToneIcon/></li>
                        <li className={style.item + " " + style.selected}>  برنامه ها <LayersIcon/></li>
                        <li className={style.item}> بازی ها   <WhatshotIcon/></li>
                        <li className={style.item}> دسته بندی ها <CategoryTwoToneIcon/></li>
                        <li className={style.item}> جستجو <SearchTwoToneIcon/></li>
                    </BrowserView>
                    <MobileView>
                        <li style={{listStyleType:"none"}}>
                            <HomeTwoToneIcon/>
                            <LayersIcon/>
                            <WhatshotIcon/>
                            <CategoryTwoToneIcon/>
                            <SearchTwoToneIcon/>
                        </li>
                    </MobileView>
                </ul>
                <div className={style.logInContainer}>
                    <button className={style.rightBtn}> ثبت نام <AddCircleIcon/></button>
                    <span className={style.blackCircle}></span>
                    <button className={style.leftBtn}><VpnKeyIcon/> ورود  </button>
                </div>
            </div>
        </fragment>
    );
};
export default Navigation;