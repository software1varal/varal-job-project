import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
      <div>
          <div className='FooterDesign'>
        <div className='footerOne'>
            <p>Browse Jobs</p>
            <p className='ms-5'>Browse Suppliers</p>
            <p className='ms-5'>Emirates</p>
            <p className='ms-5'>About</p>
            <p className='ms-5'>FAQ</p>
        </div>
        <div className='footerOne'>
            <p> &copy; R Singhania</p>
            <p className='ms-5'>Accessibility at Habot</p>
            <p className='ms-5'><NavLink to="/dataPrivacy">Data Privacy</NavLink></p>
           
            <p className='ms-5'>Cookies</p>
            <p className='ms-5'>Privacy</p>
            <p className='ms-5'><NavLink to="/tramsAndCondition">Trams</NavLink></p>
        </div>

        <div>
        </div>
    </div>
    <div className='getverified'>
        <p className='fs-4 fw-bold py-4'>Let Suppliers Find You</p>

        <button className='verified'>Get Verified</button>
    </div>
      </div>
    );
};

export default Footer;