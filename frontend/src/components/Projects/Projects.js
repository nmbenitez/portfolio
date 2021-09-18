import React from 'react';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import "./Projects.scss"


export default function Projects(){
    return(
        <div className="projects" id="projects">
            <Container>
                <h1>Portfolio   </h1>
                <hr></hr>
                <Row className="row">
                    <Col>
                        <Card className="pCard">
                            <Card.Body>
                                <Card.Header className="title">
                                    <h2> Portfolio</h2>
                                </Card.Header>
                                <Card.Text className="body">
                                    All this web page was made by me!
                                </Card.Text> 
                                <Button variant="primary" disabled className="btn-link">Link</Button> 
                                <Button variant="primary" href="https://github.com/nmbenitez/portfolio" target="_blank" className="btn-git"> GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="pCard">
                            <Card.Body>
                                <Card.Header className="title">
                                    <h2> React e-commerce</h2>
                                </Card.Header>
                                <Card.Text className="body">
                                    Prototype of an e-commerce web made with React.
                                </Card.Text> 
                                <Button variant="primary" href="https://gallant-golick-b9975d.netlify.app/"  target="_blank" className="btn-link">Link</Button> 
                                <Button variant="primary" href="https://github.com/nmbenitez/ecommerce-react"  target="_blank" className="btn-git"> GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="pCard">
                            <Card.Body>
                                <Card.Header className="title">
                                    <h2> Mailer app</h2>
                                </Card.Header>
                                <Card.Text className="body">
                                    This app send emails by using Sengrid's API.
                                </Card.Text> 
                                <Button variant="primary" href="https://rocky-ravine-46611.herokuapp.com/" target="_blank" className="btn-link">Link</Button> 
                                <Button variant="primary" href="https://github.com/nmbenitez/mailerapp-flask-python" target="_blank" className="btn-git"> GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="row">
                <Col>
                        <Card className="pCard">
                            <Card.Body>
                                <Card.Header className="title">
                                    <h2> Twitts sim</h2>
                                </Card.Header>
                                <Card.Text className="body">
                                    Simulator of twitts made with React.
                                </Card.Text> 
                                <Button variant="primary" href="https://awesome-heyrovsky-84c85f.netlify.app/" target="_blank" className="btn-link">Link</Button> 
                                <Button variant="primary" href="https://github.com/nmbenitez/twitter-sim-react" target="_blank" className="btn-git"> GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="pCard">
                            <Card.Body>
                                <Card.Header className="title">
                                    <h2> Customer manager </h2>
                                </Card.Header>
                                <Card.Text className="body">
                                This app can manage my clients. Made with Tkinter.
                                </Card.Text> 
                                <Button variant="primary" href="static/dwfiles/libreta-clientes.exe" download="libreta-clientes.exe" target="_blank" className="btn-link">Link</Button> 
                                <Button variant="primary" href="https://github.com/nmbenitez/customer-manager" target="_blank" className="btn-git"> GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="pCard">
                            <Card.Body>
                                <Card.Header className="title">
                                    <h2> Task manager</h2>
                                </Card.Header>
                                <Card.Text className="body">
                                This app helps managins your to-do's tasks. 
                                </Card.Text> 
                                <Button variant="primary" href="static/dwfiles/db.exe" download="db.exe" target="_blank" className="btn-link">Link</Button> 
                                <Button variant="primary" href="https://github.com/nmbenitez/task-manager" target="_blank" className="btn-git"> GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr />
            </Container>
        </div>
    );
}