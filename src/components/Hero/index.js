import React from "react";
import Container from "react-bootstrap/Container";
import Video from "../../assets/videos/DecoderIntro.mp4";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './style.css'

const Hero = () => {
  return (
    <Container fluid className='Hero'>
        <Row>
            <Col>
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
            </Col>
        </Row>
     </Container>
  );
};

export default Hero;
