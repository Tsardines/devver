import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => (

  <div className="footer">

    <div className="left-box">
      <ul className="footer-links">
        <NavLink to="/interview-prep">Interview Prep&emsp;</NavLink>
        <NavLink to="/algorithm-practice">Algorithm Practice&emsp;</NavLink>
        <NavLink to="/">Home&emsp;</NavLink>
          <br></br>
        <NavLink to="/job-boards">Job Boards&emsp;</NavLink>
          <br></br>
        <NavLink to="/news-and-forums">News and Forums</NavLink>
      </ul>
    </div>

    <div className="right-box">

    </div>

  </div>
)

export default Footer;
