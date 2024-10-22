import React from 'react';
import './organizer.css'; // Importing the CSS file

// Import the logos
import logo1 from '../assets/or1.png';
import logo2 from '../assets/Vegan.png';
import logo3 from '../assets/cs4.png'; // Example third logo

const Organizer = () => {
  return (
    <div className="sponsor-container">
      <h3 className="sponsor-title">Organizer</h3>
      <div className="sponsor-logos">
        {/* Organizer logos */}
        <div className="sponsor-item">
          <img src={logo2} alt="Organizer Logo 1" className="sponsor-logo" />
        </div>
        <div className="sponsor-item">
          <img src={logo3} alt="Organizer Logo 2" className="sponsor-logo" />
        </div>
        <div className="sponsor-item">
          <img src={logo1} alt="Organizer Logo 3" className="sponsor-logo" />
        </div>
      </div>
    </div>
  );
};

export default Organizer;
