import React from 'react';
import './RaceCategory.css'; 
import logo from '../assets/logo.png'; 

const RaceCategory = () => {
  return (
    <div className="race-category">
      <p className="no-fee-notice"><strong>Registration is free for the first 1000 members. After that, a fee of ₹200 will apply.</strong></p>
      <h2 className="race-title">Race Categories</h2>
      <div className="race-wrapper">
        <div className="category-card">
          <img src={logo} alt="Marathon Logo" className="category-logo" />
          <div className="category-text">
            <h3 className="category-title">8K men's Category</h3>
            <p className="category-description">
            Take a stand against child abuse by joining the Men's 8K Marathon. Your participation helps raise awareness and support for a vital cause! Together, we can make a meaningful difference in the lives of children in need.</p>          </div>
        </div>
        <div className="category-card">
          <img src={logo} alt="Marathon Logo" className="category-logo" />
          <div className="category-text">
            <h3 className="category-title">8K Women's & Children's(age:10-15)</h3>
            <p className="category-description">
            Run for a brighter future at the 8K Women's & Children's Marathon. Together, we empower the next generation to speak out against child abuse!            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceCategory;
