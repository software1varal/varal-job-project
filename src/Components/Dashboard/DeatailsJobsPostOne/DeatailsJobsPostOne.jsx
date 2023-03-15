import React from 'react';
import { Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import FooterMobileNav from '../../../Shared/FooterMobileNav/FooterMobileNav';
import Appbar from '../../../Shared/Navbar/Appbar';
import './DeatailsJobsPostOne.css'

const DeatailsJobsPostOne = () => {
    return (
        <div>
            <Appbar/>

            <Container className='my-5 p-4'>
                <div className='text-start'>
                    <h3 className='fw-bold'>Software Engineer </h3>
                </div>
                <div className='progressLineTab'>
                   
                    <div className='currentTabOne'>
                        <p className='text-white mt-3 progress-text'>
                            <NavLink to="/deatailsJobsPostOne" 
                                className="text-white">View Job Post
                            </NavLink>
                        </p>
                       
                        <div className='currentShaptop'></div>
                        <div className='currentShapbottom'></div>
                    </div>
                   
                    <div className='currentTabTwo'>
                    <p className='text-secondary mt-3 progress-text'>
                        <NavLink to="/detailsJobsPostTwo"
                            className="text-dark">Review Proposals
                        </NavLink>
                    </p>
                        <div className='currentShaptop'></div>
                        <div className='currentShapbottom'></div>
                    </div>
                   
                    <div className='currentTabThree '>
                        <p className='text-secondary mt-3 progress-text'>
                           <NavLink to="/detailsJobsPostThree">Hire (0)</NavLink>
                         </p>
                    </div>
                </div>

                <div className='viwJob-post-card p-4 py-5 shadow-sm'>
                    <div className='text-start'>
                        <div className='top-line-jobView'>
                            <p className='semibold fs-5'>
                            <i class="fa-solid fa-briefcase"></i> 
                            <span className='ms-2'> Full-time</span></p>
                           <div>
                            <button className='view-posted-job'>
                                <NavLink to="/deatailsJobsPostOne" 
                                className="text-white">Delete Job Posting
                                </NavLink>
                            </button>
                            <button className='promote-posted-job'>Edit Job Posting</button>
                        </div>
                        </div>

                        <div>
                            <p className='fw-semibold'>
                            <i className="fa-sharp fa-solid fa-money-bill"></i> 
                            <span className='ms-2'> 400 per month</span></p>
                            <p className='fw-semibold'>
                            <i class="fa-solid fa-city"></i>
                            <span className='ms-2'> Abu Dhabi</span></p>
                        </div>
                        <p className='fw-bold fs-5'>About the job</p>
                        <p className='fw-semibold'>Software Engineer - Junior</p>
                        <p>
                        Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.
                        </p>
                        <div>
                            <button className='view-posted-job'><NavLink to="/deatailsJobsPostOne" className="text-white">View Hires</NavLink></button>
                            <button className='promote-posted-job'>Promote job</button>
                        </div>
                    </div>
                </div>

            </Container>
            <Footer/>
            <FooterMobileNav/>
        </div>
    );
};

export default DeatailsJobsPostOne;