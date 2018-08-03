import React from 'react';
import './Body.css';

const Body = () => (

  <div className="body">

    <div className="arrows">
      <img src={window.location.origin + '/images/left-arrow.png'} alt="left-a" />
      <img src={window.location.origin + '/images/right-arrow.png'} alt="right-a" />
    </div>


  </div>
)

export default Body;