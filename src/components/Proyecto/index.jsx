import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import { ButtonHeader } from "../Header"

export const Section = styled.section`
    background-color:var(--gris);
    padding: 6rem 0;
`
const H2 = styled.h2`
    font-size:2rem;
    color:var(--blanco);
`
const P = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size:1rem;
`
const Hr = styled.hr`
    border-width:3px;
    max-width:50px;
    border-color:var(--blanco);
    opacity:1;
    margin: 1.5rem auto;
`
const Proyecto = () => {
    return(
        <Section>
            <Container>
                <Row>
                    <Col lg="8" className="mx-auto text-center">
                        <H2>PARCELACIÓN CURIMAQUI</H2>
                        <div style={{width:'100%'}}>
                            <Hr/>
                        </div>
                        <P className="pb-3">
                            La Parcelación Curimaqui es un loteo campestre ubicado en la ladera de un cerro con pendiente suave, 
                            ofreciendo impresionantes vistas a la viña de Casas Patronales y a las cordilleras de la costa y 
                            los Andes, incluyendo el volcán Longaví y Chillán.<br/><br/>
                            Los caminos internos son ripiados, el acceso al predio es asfaltado y hay tendido 
                            eléctrico por el frente de la parcelación. La obtención de agua es viable mediante 
                            pozos puntera debido al suelo arcilloso, y la parcelación se encuentra a 15 km de la 
                            ciudad de Cauquenes por camino asfaltado. Con rol propio, la mayoría de las parcelas 
                            supera los 10.000 m2, permitiendo la subdivisión en la mayoría de los casos.
                        </P>
                        <ButtonHeader>Mira el Masterplan 360º</ButtonHeader>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
export default Proyecto

{/* <section class="bg-gray" id="proyecto">
            <div class="container">
                <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <h2 class="section-heading text-white">PARCELACIÓN CURIMAQUI</h2>
                    <hr class="light my-4">
                    <p class="text-faded mb-4">La Parcelación Curimaqui es un loteo campestre ubicado en la ladera de un cerro con pendiente suave, ofreciendo impresionantes vistas a la viña de Casas Patronales y a las cordilleras de la costa y los Andes, incluyendo el volcán Longaví y Chillán.<br><br>
                    Los caminos internos son ripiados, el acceso al predio es asfaltado y hay tendido eléctrico por el frente de la parcelación. La obtención de agua es viable mediante pozos puntera debido al suelo arcilloso, y la parcelación se encuentra a 15 km de la ciudad de Cauquenes por camino asfaltado. Con rol propio, la mayoría de las parcelas supera los 10.000 m2, permitiendo la subdivisión en la mayoría de los casos.
                    <br><br>
                    </p>
                    <a class="btn btn-light btn-xl js-scroll-trigger" href="#tourvirtual">Mira el Masterplan 360º</a>
                </div>
                </div>
            </div>
        </section> */}