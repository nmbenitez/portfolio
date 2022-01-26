import React from 'react'
import { Row, Col} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import "./Contact.scss";

export default function Contact(){
    //const success = () => toast.success("Wow so easy!");
    
    return(
        <div className="contact" id="contact">
            <Row>
                <Col>
                <h1>
                    That's it! Let's work together!
                </h1>
                <p>I will give my best to learn and provide value.</p>
                </Col>
                <Col>
                <form class="contact-form" method='POST'>
                    <input name='name' placeholder="Name..." required />
                    <input name='email' placeholder="Email..." required type="email" />
                    <textarea placeholder="Message" name="message" required minlength="10"></textarea>
                    <button >Send  <i class="fas fa-paper-plane"></i></button>
                </form>
                </Col>
            </Row>
        </div>
    );
}