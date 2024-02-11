import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-scroll';

export const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" data-bs-theme='dark'>
        <Container className="text_end">
          {/* <img className='logo' src="src/assets/img/OIG3.jpeg" alt="surenlogo" /> */}
          <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="home" smooth={true} duration={800}  className='nav-link'>Home</Link>
              <Link to="about" smooth={true} duration={800}  className='nav-link'>About</Link>
              <Link to="skill" smooth={true} duration={800}  className='nav-link'>Skill</Link>
              <Link to="project" smooth={true} duration={800}  className='nav-link'>Project</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
