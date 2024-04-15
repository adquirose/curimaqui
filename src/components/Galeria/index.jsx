import { Section } from "../Proyecto"
import { Container, Row, Col } from "reactstrap"
import { Titulo } from "../Contacto"
import { Gallery } from "react-grid-gallery";

const images = [
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       width: 320,
       height: 212,
    },
 ];
const Galeria = () => {
    return(
        <Section backgroundColor="var(--blanco)" id="galeria">
            <Container>
                <Row>
                    <Col>
                        <Titulo color="var(--negro)">Galeria</Titulo>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col>
                        <Gallery images={images}/>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
export default Galeria