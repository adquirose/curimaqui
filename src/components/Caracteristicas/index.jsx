import { Container, Row, Col } from "reactstrap"
import { Section } from "../Proyecto"

const Caracteristicas = () => {
    return(
        <Section backgroundColor="var(--blanco)">
            <Container>
                <Row>
                    <Col lg="4" md="6" sm="12">
                        <p>
                            Excelente ubicación; con acceso asfaltado a 15 km de Cauquenes 
                            permitiendo acceso a servicios básicos (Hospital, Colegios, 
                            Supermercado, reparticiones públicas).
                        </p>
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <p>
                            Factibilidad de agua y luz
                        </p>
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <p>
                            Hermosas vistas a la viña de Casas Patronales, cordillera y volcanes.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="6" sm="12">
                        <p>
                            Actividades cercanas: Parques Nacionales (Los Queules, Federido Albert, Radal
                             Siete Tazas).
                        </p>
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <p>A menos de 100 kms a la redonda se encuentran playas como: Pelluhue, 
                            Curanipe, Cobquecura, Buchupureo, Chanco.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Section>

    )
}
export default Caracteristicas