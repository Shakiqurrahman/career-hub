import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-navigation">
        <div className="logo">
          <h1>CareerHub</h1>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="social-icons">
            <FaFacebookF color="#337FFF"/>
            <FaTwitter  color="#33CCFF" />
            <FaInstagram color="#F75274" />
          </div>
        </div>
        <div className="company footer-items">
          <h3 className="f-title">Company</h3>
          <p>About Us</p>
          <p>Work</p>
          <p>Latest News</p>
          <p>Careers</p>
        </div>
        <div className="product footer-items">
          <h3 className="f-title">Product</h3>
          <p>Prototype</p>
          <p>Price & Pricing</p>
          <p>Customers</p>
          <p>Integrations</p>
        </div>
        <div className="support footer-items">
          <h3 className="f-title">Support</h3>
          <p>Help Desk</p>
          <p>Sales</p>
          <p>Become a Partner</p>
          <p>Developers</p>
        </div>
        <div className="contact footer-items">
          <h3 className="f-title">Contact</h3>
          <p>524 Broadway , NYC</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </div>
      <div className="copyright">
        <p>@2023 <span>CareerHub</span>. All Rights Reserved</p>
        <p>Powered by CareerHub</p>
      </div>
    </footer>
  );
};

export default Footer;
