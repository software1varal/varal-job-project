import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './JobsCard.css';


const JobsCard = () => {
    const [jobs, setJobs]=useState([]);
    const [selectJob, setSelectJob]=useState([]);

    useEffect(() => {
        fetch('./findJobData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
           
    }, [])
    
    const detailsHandler= (detailsId)=>{
        console.log(detailsId)
         const selectedJob = jobs?.find((pickJob)=>pickJob.id === detailsId);
         setSelectJob(selectedJob);
    }

    return (
        <div className='mt-4'>
            <Container>
            <Row className='m-0 p-0'>
                <Col sm={12} md={5}>
            {
                jobs.map(({id, job, name, title, country, description, time,rating,index}) => <Row key={index} joball={job}
                >
                    <Col className='JobPlate mb-3'>
                    <h5>{name}</h5>
                    <i class="fa-solid fa-ellipsis-vertical dots"></i>
                    <div className='ratingDesing'>
                        <i class={rating}></i>
                        <i class={rating}></i>
                        <i class={rating}></i>
                        <i class={rating}></i>
                        <i class={rating}></i>
                    </div>
                    <p>{title} <br /> {country}</p>
                    <div className='getVerified'>
                        <button className='me-2'><i class="fa-sharp fa-solid fa-briefcase"></i>&nbsp;&nbsp;Full-time</button>
                        <button><i class="fa-solid fa-money-bills"></i>&nbsp;&nbsp;4,000</button>
                    </div>
                    <p className='mt-4'>{description}</p>
                    <p className='time' onClick={()=>detailsHandler(id)}>{time}<span className='seeMore'><a href="#jobDetails">See More...</a></span></p>
                </Col>

            </Row>)  
            }
            </Col>
             <Col sm={12} md={7} id="jobDetails">
                <div className='job-description-card'>
                    <h3>Job Details</h3> <br />
                    <h3>{selectJob?.name}</h3>
                    <div className='ratingDesing'>
                        <i class={selectJob?.rating}></i>
                        <i class={selectJob?.rating}></i>
                        <i class={selectJob?.rating}></i>
                        <i class={selectJob?.rating}></i>
                        <i class={selectJob?.rating}></i>
                    </div>
                    <p>{selectJob.title} <br />
                     {selectJob.country}</p>

                     <div>
                        <button className='jobDes-btn apply'>Apply</button>
                        <button className='jobDes-btn save'><i class="fa-regular fa-heart"></i> Save</button>
                     </div>
                     <div>
                        <h3>Full Job Description</h3>
                        <p>
                            {selectJob?.description}
                        </p> <br />
                        <h5>Salary</h5>
                        <p>AED {selectJob?.salary} a month</p>
                        <h5>Job Type</h5>
                        <p>{selectJob?.type}</p>
                     </div>

                     <button className='jobDes-report'><i class="fa-sharp fa-solid fa-flag"></i> Report Job</button>
                </div>
            </Col>
            </Row>
               
            </Container>
        </div>
    );
};

export default JobsCard;