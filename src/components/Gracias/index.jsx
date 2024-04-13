import { Helmet } from "react-helmet"
import favicon from '../../assets/images/logo.png'
const Gracias = () => {
    return(
        <>
            <Helmet>
                <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                <title>Respuesta Gracias</title>
            </Helmet>
            <h1>Gracias por contactarnos</h1>
        </>
    )
}
export default Gracias