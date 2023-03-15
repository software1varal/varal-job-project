import React from 'react';
import {Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import FooterMobileNav from '../../../Shared/FooterMobileNav/FooterMobileNav';
import Appbar from '../../../Shared/Navbar/Appbar';
import "./PostJob.css"

const PostedJobsList = () => {
    const mocPostJob = [
        {
        "jobName":"Software Engineer",
        "date":"02/03/2023",
        "status":"Active",
        "jobDes":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
        "Proposals":"200",
        "People Hired":"13",
        "Message":"150",
        },
        {
        "jobName":"Software Engineer",
        "date":"02/03/2023",
        "status":"Active",
        "jobDes":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
        "Proposals":"200",
        "People Hired":"13",
        "Message":"150",
        },
        {
        "jobName":"Software Engineer",
        "date":"02/03/2023",
        "status":"Active",
        "jobDes":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
        "Proposals":"200",
        "People Hired":"13",
        "Message":"150",
        },
        {
        "jobName":"Software Engineer",
        "date":"02/03/2023",
        "status":"Active",
        "jobDes":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
        "Proposals":"200",
        "People Hired":"13",
        "Message":"150",
        }
]
    return (
        <div>
            <Appbar/>
            <Container className='px-4 px-md-0'>
              
                <div className='text-start my-5 px-2'>
                   <h3 className='fw-bold'>Posted Jobs (10)</h3>
                   <div className='posted-job-btn-list'>
                        <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='jobList-bootstrap-btn'>
                            All jobs
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='jobList-bootstrap-btn'>
                            Status
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    <button>Completed jobs</button>
                    <button>Pending Jobs</button>
                   </div>
                </div>

                <div className='searchAndDate px-0 px-md-2 my-5'>
                <i class="fa-solid fa-magnifying-glass joblist-search"></i>
                    <input type="text" placeholder='Search job' />
                    <select type="text">
                        <option value="">15,Jan 23 - 15 Feb 23</option>
                        <option value="">15,Jan 23 - 15 Feb 23</option>
                        <option value="">15,Jan 23 - 15 Feb 23</option>
                        <option value="">15,Jan 23 - 15 Feb 23</option>
                        <option value="">15,Jan 23 - 15 Feb 23</option>
                    </select>
                </div>
                {
                  mocPostJob?.map((postedJob,index)=><Row key={index} className="m-0 my-4 post-job-container">
                    <Col sm={12} md={7}>
                        <div className='text-start p-4 shadow-sm post-job-card'>
                            <div className='d-flex align-items-center justify-content-between'>
                               <p className='fs-3 fw-bold'> {postedJob.jobName}</p> 
                              <p> 
                               <small>{postedJob.date}</small>
                               <small className='post-job-status'>{postedJob.status}</small>
                               </p>
                            </div>
                            <p>
                                {postedJob.jobDes}
                            </p>
                            <div>
                                <button className='view-posted-job'><NavLink to="/deatailsJobsPostOne" className="text-white"> View job</NavLink></button>
                                <button className='promote-posted-job'>Promote job</button>
                            </div>
                        </div>
                    </Col>
                    <Col  sm={12} md={5}>
                        <div>
                            <div className='p-4 shadow-sm post-job-card'>
                            <div className='proposal-card py-2'>
                            <h6 className='fw-bold'>Proposals</h6>
                            <h6 className='fw-bold'>{postedJob.Proposals}</h6>
                            <a href="#d">Viw all &#8211; &gt;</a>
                            </div>
                            <hr />
                            <div className='proposal-card py-3'>
                            <h6 className='fw-bold'>Proposals</h6>
                            <h6 className='fw-bold'>{postedJob.Proposals}</h6>
                            <a href="#d">Viw all &#8211; &gt;</a>
                            </div>
                            <hr />
                            <div className='proposal-card py-2'>
                            <h6 className='fw-bold'>Proposals</h6>
                            <h6 className='fw-bold'>{postedJob.Proposals}</h6>
                            <a href="#d">Viw all &#8211; &gt;</a>
                            </div>
                            </div>
                        </div>
                        
                    </Col>
                  </Row>)
                }
                <div className='ms-3'>
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
              
            </Container>
            <Footer/>
            <FooterMobileNav/>
        </div>
    );
};

export default PostedJobsList;