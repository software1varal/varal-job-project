import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
// import NavLink from 'react-bootstrap/esm/NavLink';
import havotLogo from '../../asset/habot_logo.png'

const Appbar = () => {
    return (
   



<div className='appbar-container'>
<Navbar collapseOnSelect expand="lg">
     <Container>
         <Navbar.Brand href="/">
         <img className='appLogo' src={havotLogo} alt="" />
         <NavLink to="/signin" className="signin-link mobile-login">Sign in</NavLink>

         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto nav-items">
             <NavLink to="/joblisting">Find Jobs</NavLink>
             <NavLink to="/">Supplier Reviews</NavLink>
             <NavLink to="/">Buyer Reviews</NavLink>
             <NavLink to="/">Find Services Tags</NavLink>
         </Nav>
         <Nav>
             <NavLink to="#" className="text-dark">Get Verified</NavLink>
             <NavLink to="/signin" className="signin-link">Sign in</NavLink>
             <NavLink to="/" className="text-dark ps-3">Buyer: Post jobd free</NavLink>
         </Nav>
         </Navbar.Collapse>
     </Container>
     </Navbar>
</div>
    );
};

export default Appbar;