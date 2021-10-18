import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
    <Navbar bg="dark" variant="dark">
    <Container>
        <div className="">
        <h1 style={{"color": "white"}}>Parents Care</h1>
        </div>
        <div>
        <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
      <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
    </Nav>
        </div>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;