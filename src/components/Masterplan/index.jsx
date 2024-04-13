import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

const Section = styled.section`
    background-color:var(--blanco);
    padding: 4rem 0;
`
const Masterplan = () => {
    return(
        <Section>
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