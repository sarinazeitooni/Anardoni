import React, {useEffect, useState} from "react";

const useDeviceDetect = () => {
    const [isMobile, setMobile] = useState(false);
    const [width, setWidth] = useState(null);
    useEffect(() => {
        setWidth(window.outerWidth);
        setMobile(width > 600 ? false : true)
    }, [typeof window !== "undefined" && window.outerWidth]);
    console.log(width)
    return isMobile;
}
export default useDeviceDetect;
