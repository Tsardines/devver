import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
  <div className="header">
    <ul className="nav">
      <NavLink to="/interview-prep">Interview Prep&emsp;</NavLink>
      <NavLink to="/algorithm-practice">Algorithm Practice&emsp;</NavLink>
      <NavLink to="/">Home&emsp;</NavLink>
      <NavLink to="/job-boards">Job Boards&emsp;</NavLink>
      <NavLink to="/news-and-forums">News and Forums</NavLink>
    </ul>
  </div>
  );
}

export default Header;
