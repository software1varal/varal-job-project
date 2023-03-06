import React from 'react';
import { NavLink } from 'react-router-dom';
import AppbarLogout from '../../../Shared/Navbar/AppbarLogout';
import habotLogo from "../../../asset/habot_logo.png"
import './Otp.css'

const Otp = () => {
    return (
        <div className='signin-page'>
        <AppbarLogout/>
        <div className='signin-container'>
        <div className='signUpBox p-3 p-md-5'>
            <div className='reset-container'>
                 <div className='white-container'>
                 <NavLink to="/userselection" className="arrow-back-btn ms-md-5 mt-md-4 mt-3 ms-2">
                            <i className="fa-solid fa-chevron-left"></i>
                </NavLink>
                <div className='mobileLogo'> <img src={habotLogo} alt="" /></div>

                    <p className='wlc-sign'>Welcome to <span className='habot'>Habot</span></p>
                    <p className='sub-title'>Please check your email and enter the OTP </p>
                </div>
                <div className='otp-container'>
                   <input type="text" defaultValue={6}/>
                   <input type="text" defaultValue={8}/>
                   <input type="text" defaultValue=""/>
                   <input type="text" defaultValue=""/>   
                </div>
                    <p>Resend the code in 49 sec</p>
                <button className='submitbtn fw-semibold' id="supplierBtn">
                Submit
                </button>
                <p>Didn't receive the code? <a href="#/">Send again</a></p>
                
            </div>
        </div>
    </div>
    </div>
    );
};

export default Otp;