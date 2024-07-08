import React from "react";
import "./Footer.css";
import { assets } from "./../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            nihil repudiandae eaque tempora modi ex vitae earum dolor deserunt
            laudantium nam quod amet aliquam quo esse, praesentium aspernatur
            magnam architecto.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="icons" />
            <img src={assets.twitter_icon} alt="icons" />
            <img src={assets.linkedin_icon} alt="icons" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0988 544 339</li>
            <li>truongnguyen24701@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Truong Nguyen - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
