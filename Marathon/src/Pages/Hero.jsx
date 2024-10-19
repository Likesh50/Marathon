import React from 'react';
import './Hero.css'; 
import heroImage from '../assets/hero.png'; 

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-title">Step Up for a Safe Childhood</h1>
        
      </div>
    </div>
  );
};

export default Hero;
