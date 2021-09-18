import React from 'react';
import { Container, Col, Row, Badge, Card, Button, Carousel } from 'react-bootstrap';
import "./Hero.scss";

export default function Hero(){
    return(
        <div className="hero">
            <Container>
                <Row>
                    <Col className="hero-col-left">
                        <h1> Hello there! </h1> 
                        <h2>I'm <Badge pill bg="primary">Nahuel Benítez</Badge>, web developer. </h2>
                        <br />
                        <Button variant="warning">Contact me! </Button>
                    </Col>

                    <Col className="hero-col-right">
                    <Carousel className="hero-car"> 
  <Carousel.Item interval={2000}>
    <img className="hero-img" src="static/img/FFFFFF.png" />
    
    <Carousel.Caption className="hero-capt">
    <h1>About me</h1>
      <h4> <Badge pill bg="success">Telecommunications engineering student. </Badge> </h4>
      <p>I'm passionated about technology and communications of all kind, always willing to learn new technologies
and develop myself expanding my boundaries. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2500}>
  <img className="hero-img" src="static/img/FFFFFF.png" />
    
    <Carousel.Caption className="hero-capt">
    <h1>Skills</h1>
      <img className="logo-tech" src="static/img/hero/html.png"></img>
      <img className="logo-tech" src="static/img/hero/sass.png"></img>
      <img className="logo-tech" src="static/img/hero/javas.png"></img>
      <img className="logo-tech" src="static/img/hero/react.png"></img>
      <img className="logo-tech" src="static/img/hero/python.svg"></img>
      <img className="logo-tech" src="static/img/hero/git.png"></img>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="hero-img" src="static/img/FFFFFF.png" />
    
    <Carousel.Caption className="hero-capt">
    <h1 className="hero-last" >Let's work together!</h1>
      <Button variant="warning" className="hero-last-btn">Clicking here</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}