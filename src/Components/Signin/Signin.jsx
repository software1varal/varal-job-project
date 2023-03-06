import React from 'react';
import AppbarLogout from '../../Shared/Navbar/AppbarLogout';
import './Signin.css';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import habotLogo from "../../asset/habot_logo.png"

const Signin = () => {
   
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = (e) => {
    e.preventDefault() 
    setPasswordShown(!passwordShown);
  };
    return (
        <div className='signin-page'>
            <AppbarLogout/>
           
            {/* signin container */}
            <div className='signin-container'>
                <div className='signinBox p-3 p-md-5'>
                    <div>
                        <div className='white-continer'>
                           <NavLink to="/" className="arrow-back-btn">
                            <i className="fa-solid fa-chevron-left"></i>
                           </NavLink>
                            
                            {/* mobile logo// */}
                           <div className='mobileLogo'> <img src={habotLogo} alt="" /></div>

                            <p className='wlc-sign'>Welcome to <span className='habot'>Habot</span></p>
                            <p className='sub-title'>Enter Your Details</p>
                            <button className='google-btn'> <i class="fa-brands fa-google me-2"> </i> Continue with Google</button>
                            <div className='or-container'>
                            <p className='or'>OR</p>
                            </div>
                        </div>
                        <div className='login-container'>
                           <form className='login-frm'> 
                             <p className='fw-bold'>Enter Address <span className="text-danger fs-3 fw-bold">*</span></p>
                             <input type="email" placeholder='example@gmail.com' className='login-field'/>

                             <div className='fw-bold mb-3'>New Password 
                             <span className=" tooltips ms-2">
                              <i className="fa-solid fa-circle-exclamation i-exe text-secondary"></i>
                              <span className='top'>
                                   Your password must be at least 10 characters, and can't have 3 of the same characters in a row. To improve password strength, use a mix of upper case, lower case, numbers, and symbols.Learn more...
                                <i></i>
                            </span> 
                        </span>
                        </div>
                             <div className='password-eye'>
                             <input type={passwordShown ? "text" : "password"} className='login-field' />
                             <NavLink to="/forgetpassword" className="fgt-pass-btn">Forgot your password?</NavLink>
                            
                            <button className='hide-btn' onClick={togglePassword}><i class="fa-sharp fa-regular fa-eye-slash"></i></button>
                
                             </div>
                            
                             <button className='signin fw-semibold'>
                                <NavLink 
                                  to="/userselection" 
                                  className="text-white">
                                    Sign in
                                </NavLink>
                             </button>
                           </form>
                        </div>
                        <p className='mt-5'>Don’t have an account? <NavLink to="/signup">Sign Up</NavLink> here </p>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Signin;