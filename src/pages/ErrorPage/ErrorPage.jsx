import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import errorImg from "/assets/error.jpeg";
const ErrorPage = () => {

  return (
    <div className="error-page">
      <img className="error-img" src={errorImg} alt="" />
      <p>This Page is not available!</p>
      <Link to="/">
        <button className="btn">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
