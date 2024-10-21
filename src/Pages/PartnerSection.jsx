import React from "react";
import "./PartnerSection.css";

// Import images for each partner
import healthCarePartnerLogo from '../assets/school1.webp';
import radioPartnerLogo from '../assets/hellofm.jpg';
import mediaPartnerLogo from '../assets/cs3.png';

const PartnerSection = () => {
  return (
    <div className="partner-section-container">
      <div className="partner-card">
        <h2>Health Care Partner</h2>
        <img src={healthCarePartnerLogo} alt="Health Care Partner" />

      </div>
      <div className="partner-card">
        <h2>Radio Partner</h2>
        <img src={radioPartnerLogo} alt="Radio Partner" />

      </div>
      <div className="partner-card" >
        <h2 >Media Partner</h2>
        <img src={mediaPartnerLogo} alt="Media Partner" style={{marginTop:"60px"}} />

      </div>
    </div>
  );
};

export default PartnerSection;
