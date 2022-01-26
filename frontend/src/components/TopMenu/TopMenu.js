import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import "./TopMenu.scss"
//import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

export default function TopMenu(){
    return(
        <Navbar bg="dark" variant="dark" className="top-menu">
            <Container>
                <BrandNav />
                <MenuNav />
            </Container>
        </Navbar>
    );
}

function BrandNav(){
    return(
        <Navbar.Brand>
            {/* <Logo /> */}
            <h1> Nahuel Benítez </h1>
        </Navbar.Brand>
    );
}

function MenuNav(){
    return(
        <Nav className="mr-auto" variant="tabs">
            
            <Nav.Link className="nav-lnk" href="#home" ><i class="fa fa-home"></i> Home</Nav.Link>
            <Nav.Link className="nav-lnk" href="#projects"><i class="fas fa-project-diagram"></i>  Projects</Nav.Link>
            <Nav.Link className="nav-lnk" href="#contact"> <i class="fas fa-paper-plane"></i>  Contact</Nav.Link>
        </Nav>
    );
}