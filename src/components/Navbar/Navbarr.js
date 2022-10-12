import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbarr.css'
const Navbarr = () => {
    return (
       
    <Navbar  expand="lg" className='navbar'>

      <Container className='flex'>
        <Navbar.Brand href="#home" className='text-white fw-bold world'>Quiz World</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navItems">

          <NavLink className={({isActive})=> isActive ? 'active' :undefined} to ='/home'>Home</NavLink>

          <NavLink className={({isActive})=> isActive ? 'active' :undefined} to  ='/Statics'>Statics</NavLink>

          <NavLink className={({isActive})=> isActive ? 'active' :undefined} to ='/blog'>Blog</NavLink>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
        
    );
};

export default Navbarr;