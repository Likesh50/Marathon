import React from 'react';
import './SpiritualLeader.css'; 
import gnyaguruImage from '../assets/sri-sakti-amma.jpg'; // Update with the correct image path

const SpiritualLeader = () => {
  return (
    <div className="spiritual-leader-container">
      <img src={gnyaguruImage} alt="Gnyaguru Sri Sakti Amma" className="leader-image" />
      <div className="text-container">
        <p className="blessing-text">With the Divine Blessings of</p>
        <p className="blessing-text">Beloved</p>
        <h2 className="leader-title">SRI SAKTHI AMMA</h2>
        <p className="leader-description">
          Divine Sri Sakthi Amma is a living Embodiment of Divine Grace, Radiating Wisdom and Compassion to all. Through Profound Spiritual Discourses, Amma has Illuminated the path for countless Devotees worldwide, guiding them toward Peace and Enlightenment.
        </p>
        <p className="leader-description">
          Known for Selfless Service, Amma uplifts the needy with numerous Charitable Deeds, transforming lives across the globe. With a Harmonious blend of Tradition and Modernity, Amma inspires Universal love, offering Solace and Strength to all who seek Spiritual Truth.
        </p>
      </div>
    </div>
  );
};

export default SpiritualLeader;
