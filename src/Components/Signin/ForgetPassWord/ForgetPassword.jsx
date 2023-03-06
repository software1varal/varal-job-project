import React from 'react';
import { NavLink } from 'react-router-dom';
import AppbarLogout from '../../../Shared/Navbar/AppbarLogout';
import './ForgotpassWord.css';
import habotLogo from "../../../asset/habot_logo.png"

const ForgetPassword = () => {
    return (
        <div className='reset-page'>
            <AppbarLogout/>
            <div className='signin-container'>
                <div className='reset-Box p-3 p-md-5'>
                    <div className='white-container'>
                         <NavLink to="/signin" className="arrow-back-btn ms-md-5 mt-md-4 mt-3 ms-3">
                            <i className="fa-solid fa-chevron-left"></i>
                           </NavLink>
                          
                      <div className='mobileLogo'> <img className='w-50 pt-1 px-3' src={habotLogo} alt="" /></div>

                        <p className='forgot-pass-head'>Forgot Password?</p>
                        <p className='forgot-ins'>Please enter your email to reset <br /> password</p>

                        <input type="email" placeholder='example@gmail.com' className='reset-field'/> <br />

                        <button className='rest-btn'><NavLink to="/restpassWord" className="text-white"> Submit </NavLink></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ForgetPassword;