import React from 'react';
import { Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import FooterMobileNav from '../../../Shared/FooterMobileNav/FooterMobileNav';
import Appbar from '../../../Shared/Navbar/Appbar';
import userHr from '../../../asset/user.png';
import './DeatailsJobsPostThree.css'

const DeatailsJobsPostThree = () => {
    return (
        <div>
            <Appbar/>

            <Container className='my-5 p-4 p-md-4'>
            <div className='text-start pb-4'>
                    <h3 className='fw-bold'>Review Proposals</h3>
            </div>
            <div className='progressLineTab my-5'>
                   
                   <div className='secondPostTabOne'>
                         <p className='text-white mt-3 progress-text'>
                            <NavLink to="/deatailsJobsPostOne"
                            className="text-dark">View Job Post</NavLink>
                        </p>
                       <div className='currentShaptop'></div>
                       <div className='currentShapbottom'></div>
                   </div>
                  
                   <div className='currentTabTwo'>
                   <p className='text-secondary mt-3 progress-text'>
                       <NavLink to="/detailsJobsPostTwo"
                       className="text-dark">Review Proposals</NavLink>
                   </p>
                       <div className='backShapThreetop'></div>
                       <div className='backShapThreebottom'></div>
                   </div>
                  
                   <div className='HireTabThree '>
                   <p className='text-secondary mt-3 progress-text'>
                       <NavLink to="/detailsJobsPostThree"
                            className="text-white">Hire (1)
                        </NavLink>
                   </p>
                   </div>
               </div>

               {/* hire card// */}
               <div className='border shadow-sm p-3 my-3 pb-5'>
                    <div className='hire-section mb-5'>
                        <div className='owner-role-sec'>
                            <img src={userHr} alt="" />
                            <div className='text-secondary text-start ms-3'>
                                <span className='fs-5 fw-semibold'>Huraira Tariq</span><br />
                                <small>HR Manager</small>
                            </div>
                        </div>
                        <div >
                            <button className='chat-btn'>
                                <i class="fa-regular fa-message"></i> Chat
                            </button>
                         </div>
                    </div>
              </div>
<br />
<br />
<br />
<br />
<br />
<br />
            </Container>

            <Footer/>
           <FooterMobileNav/>
        </div>
    );
};

export default DeatailsJobsPostThree;