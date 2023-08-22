import React, { useContext } from "react";
import "./JobDetails.css";

import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

import { useParams } from "react-router-dom";
import { JobContext } from "../../contexts/jobContext";

const JobDetails = () => {
  const { id } = useParams();

  const { jobsData, applyNow } = useContext(JobContext);

  const detail = jobsData.find((j) => j.id === Number(id));
  // const exist = cart.find((x) => x.id === detail.id);

  return (
    <section className="job-details">
      <div className="shape-1"></div>
      <div className="banner">
        <h1 className="b-title">Job Details</h1>
        <div className="shape-2"></div>
      </div>
      <div className="details container">
        <div className="left-details">
          <p>
            <span className="title">Job Description:</span>
            {detail.jobDesq}
          </p>
          <p>
            <span className="title">Job Responsibility:</span>
            {detail.jobResponsibility}
          </p>
          <p className="title">Educational Requirements:</p>
          <p>{detail.requirements}</p>
          <p className="title">Experiences:</p>
          <p>{detail.experience}</p>
        </div>
        <div className="details-card">
          <div className="card">
            <div className="card-details">
              <h3>Job Details</h3>
              <p className="flex">
                <span className="title flex">
                  <RiMoneyDollarCircleLine className="icon" />
                  Salary :{" "}
                </span>
                {detail.salary} (Per Month)
              </p>
              <p>
                <span className="title">Job Title :</span> {detail.title}
              </p>
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                <span className="title">Phone : </span> 01750-00 00 00
              </p>
              <p>
                <span className="title">Email : </span> info@gmail.com
              </p>
              <p className="flex">
                <span className="title flex">
                  <IoLocationOutline className="icon" />
                  Address :{" "}
                </span>
                Dhanmondi 32, Sukrabad
              </p>
              <p className="address"> Dhaka, Bangladesh</p>
            </div>
          </div>
          <button className="apply-btn" onClick={() => applyNow(detail)}>
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
