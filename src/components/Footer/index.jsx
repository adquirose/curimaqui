import { Section } from "../Proyecto"
import { Container, Row, Col } from 'reactstrap'
import { PhoneCall, Email } from "../../Icons"
import styled from "styled-components"

const Anchor = styled.a`
    color:var(--blanco);
    font-size:1.25rem;
    text-decoration:none;
`
const Card = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    height:120px;
`
const Footer = () => {
    return(
        <Section>
            <Container>
                <Row>
                    <Col md="6">
                        <Card>
                            <PhoneCall color="var(--blanco)"/>
                            <Anchor href="tel:+56928140950">+569 2814 0950</Anchor>
                            <Anchor href="tel:+56934021771">+569 3402 1771</Anchor>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card>
                            <Email color="var(--blanco)"/>
                            <Anchor href="mailto:parcelascurimaqui@gmail.com">parcelascurimaqui@gmail.com</Anchor>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
export default Footer