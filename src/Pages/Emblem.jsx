import React from "react";
import "./Emblem.css"; // CSS file for styling

// Import logo image
import organizerLogo from '../assets/emblem.png'; // adjust the path as necessary

const Emblem = () => {
  return (
    <div className="organizer-containers">
      <div className="organizer-logos">
        <img src={organizerLogo} alt="Organizer Logo" />
      </div>
    </div>
  );
};

export default Emblem;
