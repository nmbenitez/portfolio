import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import "./Contact.scss";

export default function Contact(){
    return(
        <div className="contact">
            <Row>
                <Col>
                <h1>
                    That's it! Let's work together :)
                </h1>
                <p>I will give my best to learn and provide value.</p>
                </Col>
                <Col>
                <form class="contact-form" method='POST'>
                    <input name='name' placeholder="Name..." required />
                    <input name='email' placeholder="Email..." required type="email" />
                    <textarea placeholder="Message" name="message" required minlength="10"></textarea>
                    <button>Send</button>
                </form>
                </Col>
            </Row>
        </div>
    );
}