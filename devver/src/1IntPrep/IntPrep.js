import React from 'react';
import './IntPrep.css';

const IntPrep = () => (

  <div className="body">

    <div className="arrow-l">
      <img src={window.location.origin + '/images/left-arrow.png'} alt="left-a" />
    </div>


    <div className="grid">

      <div className="row-1">

        <div className="box">
          <img className="int-cake" src={window.location.origin + "/images/cake-slice.png"} alt="cake" />
          <h1><a href="https://www.interviewcake.com/" >Interview Cake</a></h1>
        </div>

        <div className="box">
          <img className="brg" src={window.location.origin + "/images/burger.png"} alt="brg" />
        </div>


      </div>

      <div className="row-2">


        <div className="box">
          <img className="brg" src={window.location.origin + "/images/burger.png"} alt="brg" />
        </div>


      </div>

    <div className="row-3">

      <div className="box">
        <img className="brg" src={window.location.origin + "/images/burger.png"} alt="brg" />
      </div>
      <div className="box">
        <img className="brg" src={window.location.origin + "/images/burger.png"} alt="brg" />
      </div>


    </div>

  </div>

    <div className="arrow-r">
      <img src={window.location.origin + '/images/right-arrow.png'} alt="right-a" />
    </div>

</div>


)

export default IntPrep;
