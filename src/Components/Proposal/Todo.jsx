import React from 'react'
import './Todo.css'

function Todo() {
  return (
    <div>
<div className="wrapper">
<ul className="StepProgress">
  <div className="StepProgress-item ">
    <div className="step-description">
    <div className="StepProgress-heading">Write subject</div>
    <div className="StepProgress-subtext">For example: Applying for Software Engineer Position</div>
    </div>
    </div>
  <div className="StepProgress-item ">
  <div className="step-description">
    <div className="StepProgress-heading">Write proposal</div>
    <div className="StepProgress-subtext">For example: I am excited to apply for this job opportunity. I have 3+ years of extensive experience in software engineering..... </div>
    </div>
  </div>
  <div className="StepProgress-item ">
  <div className="step-description">
    <div className="StepProgress-heading">Upload documents</div>
    <div className="StepProgress-subtext">You can upload your resume/cv or cover letter or portfolio. You can also attach any neccessary documents.</div>
    </div>
  </div>
  </ul>
</div>
</div>
  )
}

export default Todo