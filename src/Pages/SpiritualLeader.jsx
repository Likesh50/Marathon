import React from 'react';
import './SpiritualLeader.css'; 
import gnyaguruImage from '../assets/sri-sakti-amma.jpg'; // Update with the correct image path

const SpiritualLeader = () => {
  return (
    <div className="spiritual-leader-container">
      <img src={gnyaguruImage} alt="Gnyaguru Sri Sakti Amma" className="leader-image" />
      <div className="text-container">
        <p className="blessing-text">With the Divine Blessings of</p>
        <p className="blessing-text">Our Beloved</p>
        <h2 className="leader-title">SRI SAKTHI AMMA</h2>
        <p className="leader-description">
        Sri Sakthi Amma embodies divine grace, radiating wisdom and compassion.
Renowned for teachings on love, compassion, and selfless service, countless
followers have found inspiration through guidance and humanitarian efforts.
With a focus on the importance of spiritual growth, community welfare, and
education, numerous initiatives have been launched, including schools, healthcare
programs, and charitable activities aimed at uplifting society.        </p>
        
      </div>
    </div>
  );
};

export default SpiritualLeader;
