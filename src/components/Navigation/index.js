import { Container, Nav, Button, Image } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
// import logo from './logo.svg';
import './style.css';


function Navigation() {

    return (

    

<Navbar sticky="top" expand="lg">
  <Navbar.Brand className="rbmedia" href="#home">
    <h2 className="brand-title">RYAN BROWN MEDIA</h2>
    <Image
      src="https://i.ibb.co/L0cWSSw/output-onlinepngtools-2.png" alt="mountain logo"
      className="mtn-logo"
    />
  </Navbar.Brand>
        {/* <Navbar.Brand href="#home">
          <img
            src="https://i.ibb.co/2SbrdkP/Ryan1-b39c770b.jpg" alt="Ryan Brown"
            className="avatar"
          />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container>
          </Container>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
      </Navbar>
    )
}
export default Navigation