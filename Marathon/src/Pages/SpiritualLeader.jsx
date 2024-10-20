import React from 'react';
import './SpiritualLeader.css'; 
import gnyaguruImage from '../assets/sri-sakti-amma.png'; // Update with the correct image path

const SpiritualLeader = () => {
  return (
    <div className="spiritual-leader-container">
      <div className="overlay"></div>
      <p className="blessing-text">With the Divine Blessings of</p>
      <img src={gnyaguruImage} alt="Gnyaguru Sri Sakti Amma" className="leader-image" />
      <h2 className="leader-title">Gnyaguru Sri Sakti Amma</h2>
      <p className="leader-description">
          To lead humanity on the spiritual path and to uplift the lives of those in need.
      </p>
    </div>
  );
};

export default SpiritualLeader;
