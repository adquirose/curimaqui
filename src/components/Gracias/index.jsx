import { Container, Row, Col } from "reactstrap"
import { HeaderContainer, H1, P, ButtonHeader } from '../Header'
import { Link } from "react-router-dom"
import favicon from '../../assets/images/logo.png'


const Gracias = () => {
    return(
        <>
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