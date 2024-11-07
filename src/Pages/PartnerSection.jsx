import React from "react";
import "./PartnerSection.css";

// Import images for each partner
import healthCarePartnerLogo from '../assets/school1.webp';
import radioPartnerLogo from '../assets/hellofm.png';
import mediaPartnerLogo from '../assets/cs3.png';

const PartnerSection = () => {
  return (
    <div className="partner-section-container">
      <div className="partner-card">
        <h3>Health Care Partner</h3>
        <img src={healthCarePartnerLogo} alt="Health Care Partner" style={{maxWidth: "300px"}} />

      </div>
      <div className="partner-card">
        <h3>Radio Partner</h3>
        <img src={radioPartnerLogo} alt="Radio Partner" />

      </div>
      <div className="partner-card" >
        <h3 >Press Partner</h3>
        <img src={mediaPartnerLogo} alt="Media Partner" style={{marginTop:"60px"}} />

      </div>
    </div>
  );
};

export default PartnerSection;
