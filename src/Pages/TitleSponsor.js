import React from 'react';
import './TitleSponsor.css'; // Importing the CSS file

// Import the logos
import logo1 from '.assests/ts1.png';
import logo2 from '.assests/ts2.png';

const TitleSponsor = () => {
  return (
    <div className="sponsor-container">
      <h1 className="sponsor-title">
        TITLE <span className="sponsor-highlight">SPONSOR</span>
      </h1>
      <div className="sponsor-logos">
        <img src={logo1} alt="Sponsor 1" className="sponsor-logo" />
        <img src={logo2} alt="Sponsor 2" className="sponsor-logo" />
      </div>
    </div>
  );
};

export default TitleSponsor;
