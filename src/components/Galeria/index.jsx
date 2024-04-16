import { useState } from "react"; 
import { Section } from "../Proyecto"
import { Container, Row, Col } from "reactstrap"
import { Titulo } from "../Contacto"
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
    {
       src: new URL('../../assets/images/galeria/1.jpg', import.meta.url).href,
       width: 1280,
       height: 720,
    },
    {
        src: new URL('../../assets/images/galeria/2.jpg', import.meta.url).href,
       width: 1280,
       height: 720,
    },
    {
        src: new URL('../../assets/images/galeria/3.jpg', import.meta.url).href,
       width: 1280,
       height: 720,
    },
    {
        src: new URL('../../assets/images/galeria/4.jpg', import.meta.url).href,
       width: 1280,
       height: 720,
    },
    {
        src: new URL('../../assets/images/galeria/5.jpg', import.meta.url).href,
       width: 1280,
       height: 720,
    },
    {
        src: new URL('../../assets/images/galeria/6.jpg', import.meta.url).href,
       width: 1280,
       height: 720,
    },
 ];
const slides = images.map(({ src, width, height }) => ({
    src: src,
    width,
    height,
}));

const Galeria = () => {
    const [index, setIndex] = useState(-1);
    const handleClick = (index) => setIndex(index);
    return(
        <Section $background="var(--blanco)" id="galeria">
            <Container>
                <Row>
                    <Col>
                        <Titulo color="var(--negro)">Galeria</Titulo>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col>
                        <Gallery onClick={handleClick} images={images} enableImageSelection={false}/>
                        <Lightbox
                            slides={slides}
                            open={index >= 0}
                            index={index}
                            close={() => setIndex(-1)}
                        />
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
export default Galeria