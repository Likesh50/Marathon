import React from 'react';
import './ChampionshipComponent.css';
import logo1 from '../assets/CH3.png';
import logo2 from '../assets/CH2.png';
import logo3 from '../assets/CH1.png';

const ChampionshipComponent = () => {
  return (
    <div className="championship-container">

      <div className="championship-item logo-first">
        <div className="logo-wrapper">
          <img src={logo1} alt="Top 10 Finisher Logo" className="championship-logo" />
        </div>
      </div>

      <div className="championship-item">
        <div className="logo-wrapper">
          <img src={logo3} alt="Third Logo" className="championship-logo" />
        </div>
      </div>
      

      <div className="championship-item">
        <div className="logo-wrapper">
          <img src={logo2} alt="First 100 Finishers Shield Logo" className="championship-logo" />
        </div>
      </div>
    </div>
  );
};

export default ChampionshipComponent;
