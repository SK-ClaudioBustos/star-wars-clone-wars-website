// CSS
import '../css/NavigationBar.css';
// Imports 
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../img/logo-navbar.svg";

function NavigationBar() {
    return(
        <Navbar id="navbar-id" className='nav-bar navbar-dark' expand="md">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="bi bi-text-center"></i>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#seccion1">Characters</Nav.Link>
                <Nav.Link href="#seccion2">Spaceships</Nav.Link>
                <Nav.Link href="#seccion3">Weapons</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <img className='navigation-icon' src={logo} alt="star wars icon"></img>
          </Container>
        </Navbar>
  );
}

export default NavigationBar;