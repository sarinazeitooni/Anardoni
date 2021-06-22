import React, {useEffect,useState} from "react";
const useDeviceDetect = ()=>{
    const [isMobile, setMobile] = useState(false);
    const [width,setWidth] = useState(null);
    useEffect(()=>{
        setWidth(window.outerWidth);
    },[width]);
    (width > 600) ? setMobile(true) : setMobile(false);
    return(isMobile);
}
export default useDeviceDetect();