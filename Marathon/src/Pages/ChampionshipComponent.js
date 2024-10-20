// ChampionshipComponent.js
import React from 'react';
import './ChampionshipComponent.css';
import logo1 from './CH1.png'; // First logo
import logo2 from './CH1.png'; // Second logo
import logo3 from './CH1.png'; // Third logo (new)

const ChampionshipComponent = () => {
  return (
    <div className="championship-container">
      {/* First logo */}
      <div className="championship-item">
        <div className="logo-wrapper">
          <img src={logo1} alt="Top 10 Finisher Logo" className="championship-logo" />
        </div>
      </div>

      {/* Second logo */}
      <div className="championship-item">
        <div className="logo-wrapper">
          <img src={logo2} alt="First 100 Finishers Shield Logo" className="championship-logo" />
        </div>
      </div>

      {/* Third logo */}
      <div className="championship-item">
        <div className="logo-wrapper">
          <img src={logo3} alt="Third Logo" className="championship-logo" />
        </div>
      </div>
    </div>
  );
};

export default ChampionshipComponent;
