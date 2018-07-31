import React from 'react';
import './Arrows.css';

const Arrows = ()  => (
  <div>
    <img src={window.location.origin + '/images/left-arrow.png'} alt="left-a" />
    <img src={window.location.origin + '/images/right-arrow.png'} alt="right-a" />
  </div>
)

export default Arrows;
