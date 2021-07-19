import React from "react";
const useViewport = () => {
    const [width, setWidth] = React.useState(typeof window!=="undefined" && window.innerWidth);
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width<700;
}
export default useViewport;