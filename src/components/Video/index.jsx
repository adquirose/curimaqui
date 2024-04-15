import { Container, Row, Col } from 'reactstrap'
import { Section } from "../Proyecto"
import { Titulo } from "../Contacto"
import styled from 'styled-components'
import video from '../../assets/video.mp4'

const SuperVideo = styled.video`
    width:100%;
    height:auto;

`
const Video = () => {
    return(
        <Section backgroundColor="var(--blanco)" id="video">
            <Container>
                <Row>
                    <Col>
                        <Titulo color="var(--negro)">Video</Titulo>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col>
                        <div className="embed-responsive embed-responsive-16by9">
                            <SuperVideo  
                                autoPlay 
                                controls 
                                muted 
                                src={video} 
                                type="video/mp4"
                            >   
                            </SuperVideo>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
export default Video
