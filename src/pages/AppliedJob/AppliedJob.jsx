import React, { useContext } from "react";
import { JobContext } from "../../contexts/jobContext";
import "./AppliedJob.css";

import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AppliedJob = () => {
  const { appliedJob } = useContext(JobContext);
  console.log(appliedJob);
  const navigate = useNavigate();
  return (
    <>
      <div className="shape-1"></div>
      <div className="banner">
        <h1 className="b-title">Applied Jobs</h1>
        <div className="shape-2"></div>
      </div>
      <div className="applied-jobs container">
        {appliedJob.length === 0 && (
          <h1 className="no-job">Currently, You don't have any applied jobs!!</h1>
        )}
        {appliedJob.map((job) => (
          <div key={job.id} className="cards">
            <div className="card">
              <div className="left-side">
                <div className="card-img">
                  <img src={job.img} alt="job image" />
                </div>
                <div className="card-info">
                  <h2 className="title">{job.title}</h2>
                  <p className="sub-title">{job.company}</p>
                  <div className="job-types">
                    <button className="secondary-btn">{job.firstBtn}</button>
                    <button className="secondary-btn">{job.secondBtn}</button>
                  </div>
                  <div className="info">
                    <p>
                      <IoLocationOutline className="icon" />
                      {job.location}
                    </p>
                    <p>
                      <RiMoneyDollarCircleLine className="icon" />
                      Salary : {job.salary}
                    </p>
                  </div>
                </div>
              </div>
              <div className="right-side">
                <button
                  onClick={() => navigate(`/job-details/${job.id}`)}
                  className="btn"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppliedJob;
