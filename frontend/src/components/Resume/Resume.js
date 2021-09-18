import React, { useState } from 'react';
import { Button, Offcanvas, Modal } from "react-bootstrap";

import "./Resume.scss";

export default function Resume(){
  const [modalShow, setModalShow] = useState(false);
    
    return(
      <div className="resume">
          <div className="resume-body" >
              <h2>My resume: </h2>
              <Button variant="danger" className="btn-link" onClick={() => setModalShow(true)}> RESUME </Button>
              <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
      </div>
    );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <img src="static/img/resume.png" className="resume-img"/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button  variant="danger" href="static/assets/BenitezNahuelResume.pdf" download="BenitezNahuelResume.pdf">Download</Button>
      </Modal.Footer>
    </Modal>
  );
}