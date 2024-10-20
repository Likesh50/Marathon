import React from "react";
import "./organizer.css"; // CSS file for styling

// Import logo image
import organizerLogo from '../assets/or1.png'; // adjust the path as necessary

const Organizer = () => {
  return (
    <div className="organizer-container">
      <h2>Organizer</h2>
      <div className="organizer-logo">
        <img src={organizerLogo} alt="Organizer Logo" />
        
      </div>
    </div>
  );
};

export default Organizer;
