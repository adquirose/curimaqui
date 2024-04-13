import styled from 'styled-components'
import Img from './../../assets/images/header.jpg'
import { Container, Row, Col, Button } from 'reactstrap'

const HeaderContainer = styled.div`
    display:flex;
    position: relative;
    background-image: url(${Img});
    height: 75vh;
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
const H1 = styled.h1`
    font-size: 4.75rem;
    font-family: "adobe-arabic", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-shadow: 1px 1px 2px #212529, 0 0 1em #212529, 0 0 0.2em #212529;
    padding-top: 120px;
    color:white;
    text-align:center;
    @media(min-width:992px){
        font-size: 4.75rem !important;
    }
`
const P = styled.p`
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
                <Row>
                    <Col lg="10" className="mx-auto">
                        <H1>
                            <strong>PARCELAS CURIMAQUI</strong>
                        </H1>
                    </Col>
                    <Col lg="8" className='mx-auto'>
                        <P className="text-faded mb-4 mb-md-5">&quot;Hogar entre viñedos y volcanes&quot;</P>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <ButtonHeader color="var(--blanco)" background="var(--verde)" className="btn btn-primary btn-xl js-scroll-trigger" href="#proyecto">Saber más</ButtonHeader>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <div className="container my-auto">
                <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h1 class="text-uppercase">
                    <strong>Parcelas Curimaqui</strong>
                    </h1>
                    <hr>
                </div>
                <div class="col-lg-8 mx-auto">
                    <p class="text-faded mb-4 mb-md-5">"Hogar entre viñedos y volcanes"</p>
                    <a class="btn btn-primary btn-xl js-scroll-trigger" href="#proyecto">Saber más</a>
                </div>
            </div> */}
        </HeaderContainer>
      
    )
}
export default Header