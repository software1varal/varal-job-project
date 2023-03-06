import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import havotLogo from "../../asset/habot_logo.png"
import './Appbar.css'

const AppbarLogout = () => {
    return (
        <div className='appbar-container'>
           <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                    <img className='appLogo' src={havotLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-items">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">Buyer Reviews</NavLink>
                        <NavLink to="/">Supplier Reviews</NavLink>
                    </Nav>
                    <Nav>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default AppbarLogout;