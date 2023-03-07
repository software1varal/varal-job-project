import React from "react";
import Appbar from "../../Shared/Navbar/Appbar";
import "./Proposal.css";
import Todo from "./Todo";

function Proposal() {
  return (
    <>
      <Appbar />
      <div className="container">
        <div className="proposal-container">
          <div className="proposal-page-heading row">Create your Proposal</div>
          <div className="proposal-job-name row">Software Engineer</div>
          <div className="proposal-form-container row">
            <div className="proposal-form col-7">
            <div className="proposal-subject row">
                <div className="proposal-label col-lg "> Subject</div>
                <div className=" col-lg"><input type="text" className=""/></div>
            </div>
            <div className="proposal-content row">
            <div className="proposal-label  col-lg"> Proposal</div>
            <div className=" col-lg"><textarea/></div>
            </div>
            <div className="proposal-document row">
            <div className="proposal-doc col-lg"> Upload   Necessary Documents</div>
            <div className="document-btn"> <i class="fa-solid fa-paperclip"></i>Drop files or Browse Visa File</div>
            </div>
            <div className="proposal-submit-btn">
            <button >Pay and Send Application</button>
            </div>           
            </div>
            <div className="job-description col-5 hide-mobile">
              <div className="desc-container">
                <div className="job-dec-header">
                  <div className="job-desc-name">Software Engineer</div>
                  <div className="job-desc-company">Imperial Solutions</div>
                  <div className="job-desc-location">Abu Dhabi</div>
                </div>
                <div className="job-desc-details">
                  We are looking for a passionate Software Engineer to design,
                  develop and install software solutions. Software Engineer
                  responsibilities include gathering user requirements, defining
                  system functionality and writing code in various languages,
                  like Java, Ruby on Rails or .NET programming languages (e.g.
                  C++ or JScript.NET.) Our ideal candidates are familiar with
                  the software development life cycle (SDLC) from preliminary
                  system analysis to tests and deployment. Ultimately, the role
                  of the Software Engineer is to build high-quality, innovative
                  and fully performing software that complies with coding
                  standards and technical design.
                </div>
              </div>
            </div>
          </div>
          <div className="hori-line"></div>
          <div className="row">
            <div className="todo-heading">
            What you have to do:
            </div>
            <Todo/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proposal;
