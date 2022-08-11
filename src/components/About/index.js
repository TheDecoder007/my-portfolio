import React from "react";
import coverImage from "../../assets/photos/FacePic.png";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



const About = () => {
  return (
    <Container>
<Row className="text-center">
<Col className="AboutCard">
   <Card style={{ width: '19rem'}}>
    <Card.Header as="h5">Who Am I</Card.Header>
        
      <Card.Img variant="bottom"
        src={coverImage}
        alt="cover" />
      </Card>
        </Col>

        <Col className="AboutMe">
      <p>lorem ipsum impsum lorem lorem ipsum impsum 
        lorem lorem ipsum impsum lorem lorem ipsum impsum lore
        m lorem ipsum impsum lorem lorem ipsum impsum lorem lorem ipsum i
        mpsum lorem lorem ipsum impsum lorem lorem ipsum impsum lorem lorem
         ipsum impsum lorem lorem ipsum impsum lorem lorem ipsum impsum lorem 
         lorem ipsum impsum lorem lorem ipsum impsum lorem</p>
        </Col>
        </Row>
        </Container>
  );
};

export default About;
