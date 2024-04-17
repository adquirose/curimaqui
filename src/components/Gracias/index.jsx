import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import { HeaderContainer, H1, P, ButtonHeader } from '../Header'
import { Link } from "react-router-dom"
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
                {/* Meta Pixel Code */}
                <script>{`!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '167097733165412');
                fbq('track', 'PageView');
                `}</script>
                <noscript>{`<img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=167097733165412&ev=PageView&noscript=1"
                />`}</noscript>
                {/* End Meta Pixel Code  */}
                <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                <title>Respuesta Gracias</title>
            </Helmet>
            <HeaderContainer $height="100vh">
                <Container className='my-auto'>
                    <Row>
                        <Col className="text-center"><img src={favicon} alt="logo"/></Col>
                        <Col lg="10" className="mx-auto">
                            <H1>
                                Gracias
                            </H1>
                        </Col>
                        <Col lg="8" className='mx-auto'>
                            <P className="text-faded mb-4 mb-md-5">Te contactaremos a la brevedad</P>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <ButtonHeader color="var(--blanco)" background="var(--verde)" className="btn btn-primary btn-xl js-scroll-trigger" to="/" as={Link}>Volver</ButtonHeader>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </HeaderContainer>
        </>
    )
}
export default Gracias