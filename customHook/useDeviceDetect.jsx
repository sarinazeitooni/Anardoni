import React, {useMemo} from "react";
const useViewport = () => {
    const [width, setWidth] = React.useState(typeof window!=="undefined" && window.innerWidth);


    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);



    // Return the width so we can use it in our components
    return width<425 ? true : false;
}

export default useViewport