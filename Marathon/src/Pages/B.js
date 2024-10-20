import React from 'react';
import './B.css'; // Import the CSS file for styling

// Import trophy images
import goldTrophy from './priceimg/gold.png'; // Update the path as needed
import silverTrophy from './priceimg/silver.png'; // Update the path as needed
import bronzeTrophy from './priceimg/bronze.png'; // Update the path as needed

function B() {
  return (
    <div className='main'>
      <div className="container">
        {/* 1st Prize - Gold Trophy */}
        <div className="box">
          <img src={goldTrophy} alt="Gold Trophy" className="trophy-image" /> {/* Gold Trophy Image */}
          <p className="cash-prize">₹10,000</p> {/* Cash prize for 1st */}
        </div>

        {/* 2nd Prize - Silver Trophy */}
        <div className="box">
          <img src={silverTrophy} alt="Silver Trophy" className="trophy-image" /> {/* Silver Trophy Image */}
          <p className="cash-prize">₹5,000</p> {/* Cash prize for 2nd */}
        </div>

        {/* 3rd Prize - Bronze Trophy */}
        <div className="box">
          <img src={bronzeTrophy} alt="Bronze Trophy" className="trophy-image" /> {/* Bronze Trophy Image */}
          <p className="cash-prize">₹2,000</p> {/* Cash prize for 3rd */}
        </div>
      </div>
    </div>
  );
}

export default B;
