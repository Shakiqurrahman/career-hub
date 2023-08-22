import React, { useState } from "react";
import featuredJobsData from "../../data/data";
import "./FeaturedJob.css";
import { IoLocationOutline } from 'react-icons/io5';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { Link, useNavigate } from "react-router-dom";

const FeaturedJob = () => {
  const navigate = useNavigate();
  const [featuredJobs, setFeaturedJobs] = useState(featuredJobsData);
  return (
    <section className="featured container">
      <h1 className="heading">Featured Jobs</h1>
      <p className="sub-heading">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="featured-jobs">
        {featuredJobs.map((curElem) => (
          <div key={curElem.id} className="featured-card">
            <img src={curElem.img} alt="featured jobs image" />
            <h2>{curElem.title}</h2>
            <p>{curElem.company}</p>
            <div className="job-types">
              <button className="secondary-btn">{curElem.firstBtn}</button>
              <button className="secondary-btn">{curElem.secondBtn}</button>
            </div>
            <div className="info">
            <p><IoLocationOutline className="icon"/>{curElem.location}</p>
            <p><RiMoneyDollarCircleLine className="icon"/>Salary : {curElem.salary}</p>
            </div>
            <button onClick={() => navigate(`job-details/${curElem.id}`)} className="btn">
               View Details
            </button>
          </div>
        ))}
      </div>
      <button className="see-all-btn btn">
        <Link>See All Jobs</Link>
      </button>
    </section>
  );
};

export default FeaturedJob;
