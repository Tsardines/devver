import React from 'react';
import './Body.css';

const Body = () => (

  <div className="body">

    <div className="arrow-l">
      <img src={window.location.origin + '/images/left-arrow.png'} alt="left-a" />
    </div>


    <div className="grid">

      <div className="row-1">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
      </div>

      <div className="row-2">
        <div className="box">5</div>
        <div className="box">6</div>
        <div className="box">7</div>
        <div className="box">8</div>
      </div>

    <div className="row-3">
      <div className="box">9</div>
      <div className="box">10</div>
      <div className="box">11</div>
      <div className="box">12</div>
    </div>

  </div> 

    <div className="arrow-r">
      <img src={window.location.origin + '/images/right-arrow.png'} alt="right-a" />
    </div>

</div>


)

export default Body;
