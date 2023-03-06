import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppbarLogout from '../../../Shared/Navbar/AppbarLogout';
import 'cooltipz-css';
import './ResetPassword.css';
import habotLogo from "../../../asset/habot_logo.png"

const RestPassWord = () => {
    const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = (e) => {
    e.preventDefault() 
    setPasswordShown(!passwordShown);
  };
    return (
        <div className='reset-page'>
        <AppbarLogout/>
        <div className='signin-container'>
            <div className='reset-Box p-3 p-md-5'>
                <div className='reset-container white-container'>
                <NavLink to="/forgetpassword" className="arrow-back-btn ms-md-5 mt-md-4 mt-3 pt-1 ms-3">
                            <i className="fa-solid fa-chevron-left"></i>
                </NavLink>

                <div className='mobileLogo w-50'> <img className='w-100 pt-1 px-3' src={habotLogo} alt="" /></div>
                
                    <p className='forgot-pass-head'>Reset Password</p>
                    <p className='forgot-ins'>Please enter your new password</p>
                    <div className='rest-password-box'>
                    <div className='password-eye text-start'>
                       <div className='fw-bold mb-3'>New Password 
                        <span className=" tooltips ms-2">
                         <i className="fa-solid fa-circle-exclamation i-exe text-secondary"></i>
                            <span className='top'>
                            Your password must be at least 10 characters, and can't have 3 of the same characters in a row. To improve password strength, use a mix of upper case, lower case, numbers, and symbols.Learn more...
                                <i></i>
                            </span> 
                        </span>
                        </div>
                        <input 
                            type={passwordShown ? "text" : "password"} 
                            className='login-field' 
                        />
                         <button 
                             className='hide-btn-reset' 
                             onClick={togglePassword}><i 
                             class="fa-sharp fa-regular fa-eye-slash"></i>
                        </button>
                    </div>
                         <p className='fw-bold text-start'>Confirm Password</p>
                             <input 
                             type="password"  
                             className='login-field'
                             />
                    </div>
                    <button className='reset-done'><NavLink to="/signin" className="text-white"> Submit </NavLink></button>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default RestPassWord;