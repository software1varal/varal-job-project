import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Appbar from '../../../Shared/Navbar/Appbar';
import jobreview from '../../../asset/job-review.PNG'
import Footer from '../../../Shared/Footer/Footer';
import FooterMobileNav from '../../../Shared/FooterMobileNav/FooterMobileNav';

const PostJobTow = () => {
    const navigate = useNavigate()
    return (
        <div>
        <Appbar/>
        <Container>
            <Row>
                <Col md={7} sm={12}>
                    <div className='p-3 p-md-5 text-start'>
                        <h3>Review Page</h3>
                        <p>Review the details of the job you are about to post.</p> <br />
                        <h3>Job Details</h3>
                        <hr />
                            <h5>Write a headline for your jobpost</h5>
                                <p>Software Engineer</p> <br /> <br />
                            <h5>Service Tags</h5>
                            <span className='tags'>Full time</span>
                            <span className='tags'>40,000/month</span>
                          <br /> <br />
                            <h5>Emirats Name</h5>
                             <p>Abu Dhabi</p>
                            <br /> <br /> <br />
                            <h5>Jobs Description</h5> <br />
                            <p>
                              We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. We need a software engineer with extensive experience in the field. 
                            </p>
                            
                            <button className='job-back-btn'>
                                <NavLink onClick={()=>navigate(-1)} 

                                className="text-dark"
                                > Back to Previous page</NavLink>
                            </button>

                            <button className='job-proceed-btn'>
                                <NavLink to="postjobthree" 
                                className="text-white"
                                >Pay & Post a Job</NavLink>
                            </button>
                    
                    </div>
                   
                </Col>
                <Col md={5} sm={12}>
                    <div className='post-job-img mt-5 pt-5'>
                        <img src={jobreview} alt="" />
                    </div>
                
                </Col>
            </Row>
        </Container>
        <Footer/>
        <FooterMobileNav/>
    </div>
    );
};

export default PostJobTow;