import React from 'react';
import { NavLink } from 'react-router-dom';
import AppbarLogout from '../../../Shared/Navbar/AppbarLogout';
import './SignupWithUserSelection.css';
import supplierLogo from '../../../asset/supplier.png'
import habotLogo from "../../../asset/habot_logo.png"


const SignupWithUserSelection = () => {


    const buyerHandler = ()=>{
        const buyer = document.getElementById("select-buyer");
        buyer.style.backgroundColor = "#072F57";

        const buyertext = document.getElementById("buyertext");
        buyertext.style.color = "#fff";

        const helptext = document.getElementById("helptext");
        helptext.style.color = "#fff";

        const searchIco = document.getElementById("searchIco");
        searchIco.style.backgroundColor = "#fff";

        const buyerBtn = document.getElementById("buyerBtn");
        buyerBtn.style.display="block"
        

        //  back to supplier

        const supplier = document.getElementById("supplier");
        supplier.style.backgroundColor = "#fff";

        const suppliertext = document.getElementById("suppliertext");
        suppliertext.style.color = "#072f57";

        const helptexts = document.getElementById("helptexts");
        helptexts.style.color = "#666";
        
        const searchIcos = document.getElementById("searchIcos");
        searchIcos.style.backgroundColor = "#a9caec";

        const supplierBtn = document.getElementById("supplierBtn");
        supplierBtn.style.display="none"
    }

    const SupplierHandler = ()=>{
        const supplier = document.getElementById("supplier");
        supplier.style.backgroundColor = "#072F57";

        const searchIcos = document.getElementById("searchIcos");
        searchIcos.style.backgroundColor = "#fff";

        const suppliertext = document.getElementById("suppliertext");
        suppliertext.style.color = "#fff";

        const helptexts = document.getElementById("helptexts");
        helptexts.style.color = "#fff";

        const supplierBtn = document.getElementById("supplierBtn");
        supplierBtn.style.display="block"
            //back to buyer//
        const buyer = document.getElementById("select-buyer");
        buyer.style.backgroundColor = "#fff";
        
        const buyertext = document.getElementById("buyertext");
        buyertext.style.color = "#072f57";

        const helptext = document.getElementById("helptext");
        helptext.style.color = "#666";
        
        const searchIco = document.getElementById("searchIco");
        searchIco.style.backgroundColor = "#a9caec";

        const buyerBtn = document.getElementById("buyerBtn");
        buyerBtn.style.display="none"
    }


    return (
        <div className='signin-page'>
            <AppbarLogout/>
            <div className='signin-container'>
            <div className='signUpBox p-3 p-md-5'>
                <div className='reset-container'>
                     <div className='white-container'>
                       <NavLink to="/signin" className="arrow-back-btn ms-md-5 mt-md-4 mt-4 ms-2">
                            <i className="fa-solid fa-chevron-left"></i>
                      </NavLink>
                     
                      <div className='mobileLogo'> <img className='w-75 pt-1 px-2' src={habotLogo} alt="" /></div>

                        <p className='wlc-sign'>Welcome to <span className='habot'>Habot</span></p>
                        <p className='sub-title '>Please select the category</p>
                    </div>
                    <div className='selection-container'>
                        <div className='userCategory-box me-3 me-md-3' id='select-buyer' onClick={()=>buyerHandler()}>
                           <div className='user-select-ico' id='searchIco'>
                             <i className="fa-solid fa-magnifying-glass"></i>
                           </div>
                          <p className='buyer-content' id='buyertext'>Join as Buyer</p>
                          <small className='small-text' id="helptext">We help people to get job</small>
                        </div>

                        <div className='userCategory-box me-2 me-md-3' id='supplier' onClick={()=>SupplierHandler()}>
                           <div className='user-select-ico' id='searchIcos'>
                              <img src={supplierLogo} alt="" />
                           </div>
                          <p className='buyer-content' id='suppliertext'>Join as Supplier</p>
                          <small className='small-text' id="helptexts">We help employers to find employes</small>
                        </div>
                       
                    </div>
                    <button className='selection-btn fw-semibold' id="buyerBtn">
                        <NavLink 
                            to="/otp" 
                            className="text-white">
                                    Continue as Buyer
                        </NavLink> 
                    </button>
                    <button className='selection-btn fw-semibold' id="supplierBtn">
                        <NavLink 
                            to="/otp" 
                            className="text-white">
                                    Continue as Supplier
                        </NavLink> 
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignupWithUserSelection;