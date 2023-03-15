import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import FooterMobileNav from '../../../Shared/FooterMobileNav/FooterMobileNav';
import Appbar from '../../../Shared/Navbar/Appbar';
import userHr from '../../../asset/user.png';
import './DetailsJobsPostTwo.css'

const DetailsJobsPostTwo = () => {

    const allProposal = [
        {
            "UserName":"Huraira Tariq",
            "role":"HR Manager",
            "subject":"Software Engineer - Junior",
            "Proposal":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
            "userImg":userHr
        },
        {
            "UserName":"Huraira Tariq",
            "role":"HR Manager",
            "subject":"Software Engineer - Junior",
            "Proposal":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
            "userImg":userHr
        },
        {
            "UserName":"Huraira Tariq",
            "role":"HR Manager",
            "subject":"Software Engineer - Junior",
            "Proposal":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
            "userImg":userHr
        },
        {
            "UserName":"Huraira Tariq",
            "role":"HR Manager",
            "subject":"Software Engineer - Junior",
            "Proposal":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
            "userImg":userHr
        }
    ]

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
                       <div className='backShaptop'></div>
                       <div className='backShapbottom'></div>
                   </div>
                  
                   <div className='secondPostTabTwo'>
                   <p className='text-secondary mt-3 progress-text'>
                       <NavLink to="/detailsJobsPostTwo"  
                          className="text-white">Review Proposals
                       </NavLink>
                   </p>
                       <div className='currentShaptop'></div>
                       <div className='currentShapbottom'></div>
                   </div>
                  
                   <div className='currentTabThree '>
                   <p className='text-secondary mt-3 progress-text'>
                       <NavLink to="/detailsJobsPostThree"
                       className="text-dark">Hire (0)</NavLink>
                   </p>
                   </div>
               </div>

{/* ------------------------proposal card */}
               <div>

                <div className='border p-4 my-5'>
 
                <div className='seaarch-proposal'>
                    <i class="fa-solid fa-magnifying-glass proposal-search-ico"></i>
                    <input type="text" placeholder='Search job' /> 
                </div>

                    {
                        allProposal.map((proposal,index)=><div key={index}>
                            <div className='border shadow-sm p-3 my-3'>
                            <div className='postOwner-sec'>
                                <div className='owner-role-sec mb-5'>
                                    <img src={proposal.userImg} alt="" />
                                    <div className='text-secondary text-start ms-3'>
                                        <span className='fs-5 fw-semibold'>{proposal.UserName}</span><br />
                                        <small>{proposal.role}</small>
                                    </div>
                                </div>
                                <div>
                                    <button className='hire-btn'>
                                    <i class="fa-solid fa-briefcase"></i> Hire</button>
                                    <button className='chat-btn'>
                                    <i class="fa-regular fa-message"></i> Chat</button>
                                </div>
                            </div>
                            <div className='text-start'>
                                <p className='fw-bold'>
                                    Subject:<span className='ms-5'>{proposal.subject}</span></p>
                                <div className='d-flex'>
                                    <p className='fw-bold'>Proposal:</p>
                                    <p className='ms-4 ps-3'>{proposal.Proposal}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        )
                    }

<div className=''>
                <nav aria-label="...">
                <ul class="pagination pagination-md">
                   <li class="page-item"><Link className="page-link" to="">1</Link></li>
                   <li class="page-item"><Link className="page-link" to="">2</Link></li>
                   <li class="page-item"><Link className="page-link" to="">3</Link></li>
                   <li class="page-item"><Link className="page-link" to="">4</Link></li>
                   <li class="page-item"><Link className="page-link" to="">{">"}</Link></li>
                 </ul>
            </nav>
                </div>
                    
                </div>

               </div>

            </Container>

            <Footer/>
            <FooterMobileNav/>
        </div>
    );
};

export default DetailsJobsPostTwo;