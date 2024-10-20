import React from 'react';
import './PriceAmount1.css'; // Import the CSS file for styling

// Import trophy images
import goldTrophy from '../assets/gold-cup.png'; // Update the path as needed
import silverTrophy from '../assets/silver-cup.png'; // Update the path as needed
import bronzeTrophy from '../assets/bronze-cup.png'; // Update the path as needed

function PriceAmount1() {
  return (
    <div className='main'>
      <h2 className="race-category-title"> Prizes for each category <br></br>(men’s, women’s & Childrens) individually</h2>
      <div className="container">
        {/* 1st Prize - Gold Trophy */}
        <div className="boxa">
          <img src={goldTrophy} alt="Gold Trophy" className="trophy-image" /> {/* Gold Trophy Image */}
          <p className="cash-prize">₹10,000 + Trophy</p> {/* Cash prize for 1st */}
        </div>

        {/* 2nd Prize - Silver Trophy */}
        <div className="boxa">
          <img src={silverTrophy} alt="Silver Trophy" className="trophy-image" /> {/* Silver Trophy Image */}
          <p className="cash-prize">₹8,000 + Trophy</p> {/* Cash prize for 2nd */}
        </div>

        {/* 3rd Prize - Bronze Trophy */}
        <div className="boxa">
          <img src={bronzeTrophy} alt="Bronze Trophy" className="trophy-image" /> {/* Bronze Trophy Image */}
          <p className="cash-prize">₹6,000 + Trophy</p> {/* Cash prize for 3rd */}
        </div>
      </div>
    </div>
  );
}

export default PriceAmount1;
