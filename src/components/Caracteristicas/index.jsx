import { Container, Row, Col } from "reactstrap"
import { Section } from "../Proyecto"
import { BeachUmbrella, Mountain, Plug, SquarePin, Tree03 } from "../../Icons"

const Caracteristicas = () => {
    return(
        <Section $background="var(--blanco)">
            <Container>
                <Row>
                    <Col lg="4" md="6" sm="12" className="d-flex flex-column align-items-center">
                        <SquarePin color="var(--verde)"/>
                        <p className="text-center pt-3">
                            Excelente ubicación; con acceso asfaltado a 15 km de Cauquenes 
                            permitiendo acceso a servicios básicos (Hospital, Colegios, 
                            Supermercado, reparticiones públicas).
                        </p>
                    </Col>
                    <Col lg="4" md="6" sm="12" className="d-flex flex-column align-items-center">
                        <Plug color="var(--verde)"/>
                        <p className="text-center pt-3">
                            Factibilidad de agua y luz
                        </p>
                    </Col>
                    <Col lg="4" md="6" sm="12" className="d-flex flex-column align-items-center">
                        <Mountain color="var(--verde)"/>
                        <p className="text-center pt-3">
                            Hermosas vistas a la viña de Casas Patronales, cordillera y volcanes.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="6" sm="12" className="d-flex flex-column align-items-center">
                        <Tree03 color="var(--verde)"/>
                        <p className="text-center pt-3">
                            Actividades cercanas: Parques Nacionales (Los Queules, Federido Albert, Radal
                             Siete Tazas).
                        </p>
                    </Col>
                    <Col lg="4" md="6" sm="12" className="d-flex flex-column align-items-center">
                        <BeachUmbrella color="var(--verde)"/>
                        <p className="text-center pt-3">A menos de 100 kms a la redonda se encuentran playas como: Pelluhue, 
                            Curanipe, Cobquecura, Buchupureo, Chanco.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Section>

    )
}
export default Caracteristicas