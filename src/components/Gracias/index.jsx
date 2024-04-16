import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import favicon from '../../assets/images/logo.png'
const Gracias = () => {
    return(
        <>
            <Helmet>
           
                {/* Google tag (gtag.js)  */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16475744525"></script>
                <script>{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){
                    dataLayer.push(arguments);
                }
                gtag('js', new Date());

                gtag('config', 'AW-16475744525');`}
                </script>
                {/* Event snippet for Formulario_Gracias conversion page  */}
                <script>
                    {`gtag('event', 'conversion', {'send_to': 'AW-16475744525/gXRlCIqopZcZEI3Sn7A9'});`}
                </script>
                <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                <title>Respuesta Gracias</title>
            </Helmet>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                        <h2>Gracias por contactarnos</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Gracias