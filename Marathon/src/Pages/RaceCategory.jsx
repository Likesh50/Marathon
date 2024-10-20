import React from 'react';
import './RaceCategory.css'; // Updated CSS for enhanced design
import logo from '../assets/logo.png'; // Import your logo image

const RaceCategory = () => {
  return (
    <div className="race-category">
      <h2 className="race-title">Race Categories</h2>
      <div className="race-wrapper">
        <div className="category-card">
          <img src={logo} alt="Marathon Logo" className="category-logo" />
          <div className="category-text">
            <h3 className="category-title">10K Race</h3>
            <p className="category-description">
              With the possible exception of the equator, everything begins here. A peaceful 10K could be on the cards.
            </p>
          </div>
        </div>
        <div className="category-card">
          <img src={logo} alt="Marathon Logo" className="category-logo" />
          <div className="category-text">
            <h3 className="category-title">5K Race</h3>
            <p className="category-description">
              All the beginners and amateur runners, fret not! One step at a time and an easy 5K might just give you all the push you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceCategory;
