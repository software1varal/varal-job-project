import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import FooterMobileNav from '../../Shared/FooterMobileNav/FooterMobileNav';
import Appbar from '../../Shared/Navbar/Appbar';
import JobsCard from '../JobsCard/JobsCard';
import './Joblisting.css';

const Joblisting = () => {

    return (
        <div>

            <Appbar />
            <Container>
                <Row className='findjobs mt-5 m-2'>
                    <Col md={1}></Col>
                    <Col md={4}>
                    <div className='SearchText'>
                            <p>Keyword</p>
                            <div class="search-input">
                                <input type="Search" class="form-control rounded" placeholder="Job Title, Keywords or service Tags" aria-label="Search" aria-describedby="search-addon" />
                                <span className="what-input">
                                <h6>What</h6>
                            </span>
                                <span className="search-icon-input">
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
                                <span className="what-input">
                                <h6>Where</h6>
                            </span>
                                <span className="search-icon-input">
                                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='findJobButton'>
                            <button>Find Jobs</button>
                        </div>
                    </Col>
                    
                </Row>

                <Container>
                <Col>
                        <div className='sort-btn-container'>
                            <button className='sort-btn'>Sort jobs</button>
                            <button className='sort-btn country'>Abu Dhabi</button>
                            <button className='sort-btn'>All Jobs</button>
                            <button className='sort-btn'>Pending Jobs</button>
                            <button className='sort-btn'>Saved jobs</button>
                        </div>
                    </Col>
                </Container>
            </Container>
            <Container>
                <div className='findNextJob mt-5'>
                    <h5>Find your next job on <span style={{color:"#3B93EF"}}>Habot</span> in just one click!</h5>
                    <hr className='hrStyle'/>
                    <p>Software enginner jobs in Abu Dhabi</p>
                </div>
            </Container>
           
            <JobsCard/>

            <Container>
            <div>
         <nav aria-label="...">
            <ul class="pagination pagination-md">
                <li class="page-item"><Link className="page-link" to="">1</Link></li>
                <li class="page-item"><Link className="page-link" to="">2</Link></li>
                <li class="page-item"><Link className="page-link" to="">3</Link></li>
                <li class="page-item"><Link className="page-link" to="">4</Link></li>
            </ul>
            </nav>
         </div>
            </Container>


            <Footer />
            <FooterMobileNav/>
        </div>
    );
};

export default Joblisting;