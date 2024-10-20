import React from 'react';
import './ResponsiveImagesComponent.css'; // Import the CSS file
import womenImage from '../assets/womenstable.png'; // Import the image for Men's Prize Table
import menImage from '../assets/menstable.png'; // You can replace this with the Women's image

const ResponsiveImagesComponent = () => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img src={menImage} alt="Men's Prize Table" className="responsive-image" />
      </div>
      <div className="image-wrapper">
        <img src={womenImage} alt="Women's Prize Table" className="responsive-image" />
      </div>
    </div>
  );
};

export default ResponsiveImagesComponent;
