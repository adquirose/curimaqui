import { Container, Row, Col } from 'reactstrap'
import { Section } from '../Proyecto'

const Masterplan = () => {
    return(
        <Section $background="white" id="masterplan">
            <Container>
                <Row>
                    <Col>
                        <iframe src="https://www.lanube360.com/curimaqui/" allow="fullscreen" title="MASTERPLAN 360º" style={{width:'100%',height:'500px'}}/>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
export default Masterplan