import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageView = () => {
    const location = useLocation()
    
    useEffect(() => {
        if(location.pathname == '/gracias')
        window.dataLayer.push({
            event:'conversion'
        })
        
    },[location])

    return(
        null
    )
}
export default PageView