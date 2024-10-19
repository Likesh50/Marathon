import React from 'react';
import './Hero.css'; 
import heroImage from '../assets/V.jpg'; 

const Hero = () => {
  return (
    <div>
        <div className="hero-container">
          <img src={heroImage} alt="Hero" />
        </div>
        </div>
  );
};

export default Hero;
