import React from 'react';
import Appbar from '../../Shared/Navbar/Appbar';
import './WelcomePage.css';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import { NavLink } from 'react-router-dom';
import FooterMobileNav from '../../Shared/FooterMobileNav/FooterMobileNav';

const WelcomePage = () => {
    return (
        <div>
            <Appbar/>
        <Container>
            <Row className='findjobs mt-5 mx-2'>
                <Col md={1}></Col>
                <Col md={4}>
                    <div className='SearchText'>
                        <p>Keyword</p>
                        <div class="search-input">
                            <input type="Search" className="form-control rounded search-icons" placeholder="Job Title, Keywords or service Tags" aria-label="Search" aria-describedby="search-addon" />
                            <span className="what-input">
                                <h6>What</h6>
                            </span>
                            <span className="search-icon-input">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className='SearchText'>
                        <p>Location</p>
                        <div className="search-input">
                            <input type="Search" className="form-control rounded" placeholder="City or Emirate" aria-label="Search" aria-describedby="search-addon" />
                            <span className="what-input">
                                <h6>Where</h6>
                            </span>
                            <span className="search-icon-input">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                            </span>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={2}>
                    <div className='findJobButton'>
                        <button><NavLink to="/joblisting" className="text-white">Find Jobs</NavLink> </button>
                    </div>
                </Col>
            </Row>
        </Container>
        
        <Container>
           <div className='mt-5'>
            <p ><span className='postjob-heading'>Buyers: Post a job </span>- Your next hire is here</p>
            <p ><span className='postjob-heading'>Suppliers: Join</span>- It only takes a few seconds</p>

            <p className='mt-5 pt-5 fw-semibold'>
            Habot in other countries: <span className='text-primary'>Jobs in Kuwait, Jobs in Oman, Jobs in Qatar, Jobs in Saudi Arabia, Jobs in Egypt, Jobs in Morocco, Jobs in Bahrain</span> 
            </p>

           
           </div>
<div className='dropdwon-three'>
<Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey="0">
        <Accordion.Header className='accordine-header'><div className='fs-4 text-dark d-flex justify-content-center mt-2 mt-md-4'> What's trending on Habot</div></Accordion.Header>
        <Accordion.Body>
    <div className='three-dropdown'>
            <ul>
                <h4>Trending Searches</h4>
                <li><NavLink className="text-dark" to="">UI/ux</NavLink></li>
                <li><NavLink className="text-dark" to="">Software Engineer</NavLink></li>
                <li><NavLink className="text-dark" to="">Mechine learning engineer</NavLink></li>
                <li><NavLink className="text-dark" to="">Data Scientist</NavLink></li>
                <li><NavLink className="text-dark" to="">Remote ux jobs</NavLink></li>
                <li><NavLink className="text-dark" to="">Data Entry</NavLink></li>
                <li href="#/action-3"><NavLink to="">More</NavLink></li>
            </ul>
            <ul>
                <h4>Trending Jobs</h4>
                <li><NavLink className="text-dark" to="">UI/ux</NavLink></li>
                <li><NavLink className="text-dark" to="">Software Engineer</NavLink></li>
                <li><NavLink className="text-dark" to="">Mechine learning engineer</NavLink></li>
                <li><NavLink className="text-dark" to="">Data Scientist</NavLink></li>
                <li><NavLink className="text-dark" to="">Remote ux jobs</NavLink></li>
                <li><NavLink className="text-dark" to="">Data Entry</NavLink></li>
                <li href="#/action-3"><NavLink to="">More</NavLink></li>   
            </ul>
            <ul>
                <h4>Popular Emirates</h4>
                <li><NavLink className="text-dark" to="">UI/ux</NavLink></li>
                <li><NavLink className="text-dark" to="">Software Engineer</NavLink></li>
                <li><NavLink className="text-dark" to="">Mechine learning engineer</NavLink></li>
                <li><NavLink className="text-dark" to="">Data Scientist</NavLink></li>
                <li><NavLink className="text-dark" to="">Remote ux jobs</NavLink></li>
                <li><NavLink className="text-dark" to="">Data Entry</NavLink></li>
                <li href="#/action-3"><NavLink to="">More</NavLink></li>
            </ul>     
       </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>

    
 </div>

        </Container>
        <FooterMobileNav/>
       <Footer/>
    </div>
    );
};

export default WelcomePage;