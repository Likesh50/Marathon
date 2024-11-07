import React from 'react';
import './RaceCategory.css'; 
import logo from '../assets/logo.png'; 

const RaceCategory = () => {
  return (
    <div className="race-category">
      <p className="no-fee-notice"><strong>Registration is free</strong></p>
      <h2 className="race-title">Race Categories <br></br> (AGE : ABOVE 10)</h2>
      <div className="race-wrapper">
        <div className="category-card">
          <img src={logo} alt="Marathon Logo" className="category-logo" />
          <div className="category-text">
            <h3 className="category-title">8K<span style={{textTransform:"lowercase"}}>m</span> men's Category</h3>
            <p className="category-description">
            Take a stand against drug abuse by joining the Men's 8Km Marathon. Your participation helps raise awareness and support for a vital cause! Together, we can make a meaningful difference in promoting a drug-free future for our communities and protecting the lives of those at risk.</p>          </div>
        </div>
        <div className="category-card">
          <img src={logo} alt="Marathon Logo" className="category-logo" />
          <div className="category-text">
            <h3 className="category-title">8K<span style={{textTransform:"lowercase"}}>m</span> Women's & Children's(age:10-15)</h3>
            <p className="category-description">
            Run for a brighter future at the 8Km Women's & Children's Marathon. Together, we empower the next generation to speak out against drug abuse and build a healthier, drug-free future!         </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceCategory;
