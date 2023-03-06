import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppbarLogout from '../../../Shared/Navbar/AppbarLogout';
import "./SignuFrm.css"
import habotLogo from "../../../asset/habot_logo.png"

const SignUpFrm = () => {
    const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = (e) => {
    e.preventDefault() 
    setPasswordShown(!passwordShown);
  };
    return (
        <div className='signupfrm-page'>
        <AppbarLogout/>
        <div className='signin-container'>
            <div className='signUpBox p-3 p-md-5 pb-5'>
                  <div className='white-container'>
                      <NavLink to="/signin" className="arrow-back-btn ms-4 ms-md-5 mt-md-4 mt-3">
                            <i className="fa-solid fa-chevron-left"></i>
                      </NavLink>

                      <div className='mobileLogo'> <img src={habotLogo} alt="" /></div>
                           
                            <p className='wlc-sign'>Welcome to <span className='habot'>Habot</span></p>
                            <p className='sub-title'>Enter Your Details</p>
                            <button className='google-btn'> <i class="fa-brands fa-google me-2"> </i> Continue with Google</button>
                            <div className='or-container'>
                            <p className='or'>OR</p>
                            </div>
                        </div>
                        <div className='login-container'>
                           <form 
                            className='login-frm'> 
                             <p 
                             className='fw-bold'>Full Name <span className="text-danger fs-3 fw-bold">*</span></p>
                             <input 
                              type="text"
                              className='login-field'
                              />

                             <p 
                             className='fw-bold'>Enter Address <span 
                             className="text-danger fs-3 fw-bold">*</span></p>
                             <input 
                             type="email" 
                             placeholder='example@gmail.com' className='login-field'/>
                             <small 
                             className='fs-6 text-secondary small-text-top'>We'll use your email address to send you updates</small>

                             <p 
                             className='fw-bold'>Phone Number <span className="text-danger fs-3 fw-bold">*</span></p>
                             <input 
                              type="number" 
                              placeholder='write your whatsapp number' className='login-field'/>

                      <div className='fw-bold mb-3'>New Password 
                        <span className=" tooltips ms-2">
                         <i className="fa-solid fa-circle-exclamation i-exe text-secondary"></i>
                            <span className='top'>
                            Your password must be at least 10 characters, and can't have 3 of the same characters in a row. To improve password strength, use a mix of upper case, lower case, numbers, and symbols.Learn more...
                                <i></i>
                            </span> 
                        </span>
                        </div>
                            <div 
                              className='password-eye'>
                              <input 
                               type={passwordShown ? "text" : "password"} className='login-field' />
                               <button 
                               className='hide-btn' 
                               onClick={togglePassword}><i 
                               class="fa-sharp fa-regular fa-eye-slash"></i>
                               </button>
                             </div>

                             <p 
                             className='fw-bold'>Confirm Password </p>
                             <input 
                             type="password"  
                             className='login-field'/>

                             <p 
                             className='fw-bold'>Referral code<span className="fs-6 fw-normal text-secondary">(optional)</span></p>
                             <input 
                             type="text"  
                             className='login-field'/>
                             
                             <input type="checkbox" className='checkbox'/>
                             <small>I gree to <NavLink to="">terms of service</NavLink> & <NavLink to="">privacy policy</NavLink> </small>
                           </form>
                        </div>
                        <button className='signinup fw-semibold'>Sign Up</button>
                        <p className='mt-5'>Already have an account <NavLink to="/signin">Log in</NavLink> here </p>
            </div>
        </div>
        
    </div>
    );
};

export default SignUpFrm;