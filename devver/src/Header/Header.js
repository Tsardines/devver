import React from 'react';
import './Header.css';

const Header = () => (
  <div>
    <div className="header">
      <h1>Devver</h1>
      <h2>Sub-header</h2>
      </div>

      <div className="nav-row">
      <ul className="nav">
        <li>Interview Prep</li>
        <li>Algorithm Practice</li>
        <li>Job Boards</li>
        <li>News and Forums</li>
      </ul>
    </div>
  </div>
)

export default Header;
