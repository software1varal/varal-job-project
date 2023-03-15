import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import ProfileDropdown from './ProfileDropdown/ProfileDropdown'

import havotLogo from '../../asset/habot_logo.png'
import messageIcon from '../../asset/message-icon.svg'
import notificationBell from '../../asset/notification-bell.svg'

const Appbar = ({isLoggedIn=true}) => {
    return (
   



<div className='appbar-container'>
<Navbar collapseOnSelect expand="lg">
     <Container>
         <Navbar.Brand href="/">
         <img className='appLogo' src={havotLogo} alt="" />
         {!isLoggedIn&&<NavLink to="/signin" className="signin-link mobile-login">Sign in</NavLink>
}
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto nav-items">
             <NavLink to="/joblisting">Find Jobs</NavLink>
             <NavLink to="/">Supplier Reviews</NavLink>
             <NavLink to="/">Buyer Reviews</NavLink>
             <NavLink to="/">Find Services Tags</NavLink>
         </Nav>
         <Nav className=" nav-items">
             <NavLink to="#" className="text-dark">Get Verified</NavLink>
             
             </Nav>
         </Navbar.Collapse>
         {!isLoggedIn ?
             <div>
             <NavLink to="/signin" className="signin-link">Sign in</NavLink>
             <NavLink to="/" className="text-dark ps-3">Buyer: Post jobd free</NavLink>
             </div> :
             <>
            
             <NavLink to="#" className='message-link'>
             <img src={messageIcon} alt="" ></img>
             </NavLink>
             <NavLink to="/notifications" className='notification-link'>
             <img src={notificationBell} alt=""></img>
             </NavLink>

             <ProfileDropdown/>
             
             </>
             }
     </Container>
     </Navbar>
</div>
    );
};

export default Appbar;