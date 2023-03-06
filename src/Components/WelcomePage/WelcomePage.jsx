import React from 'react';
import Appbar from '../../Shared/Navbar/Appbar';
import './WelcomePage.css';
import { Accordion, Col, Container, Dropdown, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import { NavLink } from 'react-router-dom';
import FooterMobileNav from '../../Shared/FooterMobileNav/FooterMobileNav';

const WelcomePage = () => {
    return (
        <div>
            <Appbar/>
        <Container>
            <Row className='findjobs mt-5'>
                <Col md={1}></Col>
                <Col md={4}>
                    <div className='SearchText'>
                        <p>Keyword</p>
                        <div class="search-input">
                            <input type="Search" class="form-control rounded search-icons" placeholder="Job Title, Keywords or service Tags" aria-label="Search" aria-describedby="search-addon" />
                            <span className="search-icon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='SearchText'>
                        <p>Location</p>
                        <div class="search-input">
                            <input type="Search" class="form-control rounded" placeholder="City or" aria-label="Search" aria-describedby="search-addon" />
                            <span className="search-icon">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                            </span>
                        </div>
                    </div>
                </Col>
                <Col md={2}>
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
        <Dropdown>
            <Dropdown.Toggle>
                  Trending Searches
            </Dropdown.Toggle>

            <Dropdown.Menu className='drop-options'>
                <Dropdown.Item href="#/action-1">UI/ux</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Software Engineer</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Mechine learning engineer</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Data Scientist</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Remote ux jobs</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Data Entry</Dropdown.Item>
                <Dropdown.Item href="#/action-3"><NavLink to="">More</NavLink></Dropdown.Item>
            </Dropdown.Menu>
       </Dropdown>

        <Dropdown>
            <Dropdown.Toggle>
            Trending Jobs
            </Dropdown.Toggle>

            <Dropdown.Menu className='drop-options pe-0 pe-md-4'>
                <Dropdown.Item href="#/action-1">UI/ux</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Software Engineer</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Mechine learning engineer</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Data Scientist</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Remote ux jobs</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Data Entry</Dropdown.Item>
                <Dropdown.Item href="#/action-3"><NavLink to="">More</NavLink></Dropdown.Item>
            </Dropdown.Menu>
       </Dropdown>
       

        <Dropdown>
            <Dropdown.Toggle>
                  Popular Emirates
            </Dropdown.Toggle>

            <Dropdown.Menu className='drop-options'>
                <Dropdown.Item href="#/action-1">UI/ux</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Software Engineer</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Mechine learning engineer</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Data Scientist</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Remote ux jobs</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Data Entry</Dropdown.Item>
                <Dropdown.Item href="#/action-3"><NavLink to="">More</NavLink></Dropdown.Item>
            </Dropdown.Menu>
       </Dropdown>
       </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>

      {/* =================for mobile */}
      <Accordion className='mobile-accordian'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
           <span className='fs-5 text-dark'>Trending Searches</span>
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>UI/ux</li>
            <li>Software Engineer</li>
            <li>Mechine learning engineer</li>
            <li>Data Scientist</li>
            <li>Remote ux jobs</li>
            <li>Data Entry</li>
            <li href="#/action-3"><NavLink to="">More</NavLink></li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
     
        <Accordion.Header> <span className='fs-5 text-dark'>Trending Jobs</span></Accordion.Header>
        <Accordion.Body>
        <ul>
            <li>UI/ux</li>
            <li>Software Engineer</li>
            <li>Mechine learning engineer</li>
            <li>Data Scientist</li>
            <li>Remote ux jobs</li>
            <li>Data Entry</li>
            <li href="#/action-3"><NavLink to="">More</NavLink></li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
      
        <Accordion.Header><span className='fs-5 text-dark'>Popular Emirates</span></Accordion.Header>
        <Accordion.Body>
        <ul>
            <li>UI/ux</li>
            <li>Software Engineer</li>
            <li>Mechine learning engineer</li>
            <li>Data Scientist</li>
            <li>Remote ux jobs</li>
            <li>Data Entry</li>
            <li href="#/action-3"><NavLink to="">More</NavLink></li>
          </ul>
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