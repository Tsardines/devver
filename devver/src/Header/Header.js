import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';
import IntPrep from './1IntPrep/IntPrep';
import Algo from './2Algo/Algo';

const Header = () => (
  <Router>
    <div>
      <ul>
        <li>
        </li>
        <li>
          <Link to="/interview-prep">Interview Prep</Link>
        </li>
        <li>
          <Link to="/algorithm-practice">Algorithm Practice</Link>
        </li>
      </ul>

      <hr />

      <Route path="/interview-prep" component={IntPrep} />
      <Route path="/algorithm-practice" component={Algo} />
    </div>
  </Router>
)

export default Header;
