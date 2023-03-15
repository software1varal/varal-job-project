import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import postJobImg from '../../../asset/postJob.PNG'
import Footer from '../../../Shared/Footer/Footer';
import FooterMobileNav from '../../../Shared/FooterMobileNav/FooterMobileNav';
import Appbar from '../../../Shared/Navbar/Appbar';
import './PostJobOne.css'

const PostJobOne = () => {
    return (
        <div>
            <Appbar/>
            <Container>
                <Row>
                    <Col md={7} sm={12}>
                        <div className='p-3 p-md-5 text-start'>
                            <h3>Give Details of the job</h3>
                            <p>Find the best suppller for your need</p> <br />
                            <h3>Job Details</h3>
                            <hr />
                            <form>
                                <h5>Write a headline for your jobpost</h5>
                                <input className='job-input-field' type="text" /> <br /> <br />
                                <h5>Service Tags</h5>
                                <input className='job-input-field' type="text" /> <br /> <br />
                              
                                <h5>Emirats Name</h5>
                                <select className='job-input-field'>
                                    <option>Abu Dhabi</option>
                                    <option>Oman</option>
                                    <option>Qatar</option>
                                    <option>Saudi Arabia</option>
                                    <option>Egypt</option>
                                    <option>Morocco</option>
                                </select>
                                <br /> <br />
                                <h5>Jobs Description</h5>
                                <textarea 
                                className='text-area-job' rows="12" cols="100"/>
                                <button className='job-proceed-btn'>
                                    <NavLink to="postjobtwo" 
                                    className="text-white"
                                    >Proceed</NavLink>
                                </button>


                            </form>
                        
                        </div>
                       
                    </Col>
                    <Col md={5} sm={12}>
                        <div className='post-job-img'>
                            <img src={postJobImg} alt="" />
                        </div>
                    
                    </Col>
                </Row>
            </Container>
            <Footer/>
            <FooterMobileNav/>
        </div>
    );
};

export default PostJobOne;