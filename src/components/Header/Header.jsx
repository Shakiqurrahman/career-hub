import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "/assets/All Images/CareerHub.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink to="/">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/applied-job">Applied Job</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
      <button className="btn">
        <Link>Start Applying</Link>
      </button>
    </header>
  );
};

export default Header;
