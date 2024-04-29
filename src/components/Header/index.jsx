import styled from 'styled-components'
import Img from './../../assets/images/header.jpg'
import { Container, Row, Col, Button } from 'reactstrap'
import { Formulario } from '../Contacto'
<<<<<<< HEAD

=======
>>>>>>> 4f6f304ebd0310ff17978741779cb359284ba241
export const HeaderContainer = styled.div`
    display:flex;
    position: relative;
    background-image: url(${Img});
    height: ${props => props.$height? props.$height: '75vh'};
    min-height: 25rem;
    overflow: hidden;
    background-size: cover;
    @media(min-width:992px){
        height: 100vh;
        min-height: 650px;
        padding-top: 0;
        padding-bottom: 0;
    }
`
export const H1 = styled.h1`
    font-size: 4.75rem;
    font-family: "adobe-arabic", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-shadow: 1px 1px 2px #212529, 0 0 1em #212529, 0 0 0.2em #212529;
    padding-top: 90px;
    color:white;
    text-align:center;
    @media(min-width:992px){
        font-size: 4.75rem !important;
    }
    @media(max-width:576px){
        font-size: 3.5rem !important;
    }
`
export const P = styled.p`
    font-family: "adobe-arabic", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #fff;
    font-size: 2rem;
    text-align:center;
    text-shadow: 1px 1px 2px #212529, 0 0 1em #212529, 0 0 0.2em #212529;
    @media(min-width:768px){
        font-size:3rem;
    }
`
export const ButtonHeader = styled(Button)`
    border-radius:300px;
    background-color:${props => props.background ? props.background: 'white'};
    border-color:${props => props.background ? props.background: 'white'};
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    padding: 1rem 2rem;
    font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
    color:${props => props.color ? props.color: 'black'};
    &:hover{
        background-color:${props => props.background ? props.background: 'white'};
        border-color:${props => props.background ? props.background: 'white'}; 
        color:${props => props.color ? props.color: 'black'};
    }
    
`
const Header = () => {
    return(
        <HeaderContainer>
            <Container className='my-auto'>
                <Row className='d-flex justify-content-center'>
                    <Col lg="10" className="mx-auto">
                        <H1>
                            <strong>PARCELAS CURIMAQUI</strong>
                        </H1>
                        <P className="text-faded mb-4 mb-md-5">&quot;Hogar entre viñedos y volcanes&quot;</P>
                    </Col>
                    <Col lg="10" md="12" xs="12">
                        <Formulario/>
                    </Col>
                </Row>
            </Container>
        </HeaderContainer>
      
    )
}
export default Header