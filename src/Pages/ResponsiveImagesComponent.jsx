import React from 'react';
import './ResponsiveImagesComponent.css'; // Import the CSS file
import womenImage from '../assets/ew.png'; // Import the image for Women's Prize Table
import menImage from '../assets/ew.png'; // Import the image for Men's Prize Table

const ResponsiveImagesComponent = () => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <p className="image-title">Men's Prize + Trophy</p> {/* Text above the image */}
        <img src={menImage} alt="Men's Prize Table" className="responsive-image" />
      </div>
      <div className="image-wrapper" >
        <p className="image-title">(Women's & Children's) Prize + Trophy</p> {/* Text above the image */}
        <img src={womenImage} alt="Women's Prize Table" className="responsive-image" />
      </div>
    </div>
  );
};

export default ResponsiveImagesComponent;
