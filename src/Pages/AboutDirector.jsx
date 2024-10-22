import React from 'react';
import './AboutDirector.css';
import directorImage from '../assets/director.jpg'; // Add the correct path to the director's photo

const AboutDirector = () => {
  return (
    <div className="about-director-container">
      <div className="about-director">
        <div className="about-content">
          <h1>Beloved Director</h1>
          <h2>Dr. M. Suresh Babu</h2>
          <h6 style={{marginTop:"-3%"}}>Trustee & Director</h6>
          <h6 >Sripuram Golden Temple</h6>
          <h6 style={{marginBottom:"6%"}}> & Sri Narayani Schools</h6>
          <p>
          Dr. M. Suresh Babu, has been rendering dedicated divine service for over 35 years alongside the revered Sri Sakthi Amma. A successful entrepreneur, Dr. Suresh Babu has contributed significantly to various social and spiritual causes, working closely with Sri Sakthi Amma to uplift the community.           </p>
          <p>
          He is also a champion of environmental sustainability, having founded the "Green Sakthi" initiative, which focuses on planting trees and donating saplings to the public to promote greener surroundings.<br></br><br></br> <b>In celebration of his birthday this year (21 November)</b>, a grand marathon is being organized on November 17th, reflecting his commitment to health, well-being, and community spirit. His leadership and contributions have left a lasting impact on both the educational and social sectors.          </p>
        </div>
        <div className="director-image">
          <img src={directorImage} style={{borderRadius:"20px 0px 30px 20px"}} alt="Director" />
        </div>
      </div>
    </div>
  );
};

export default AboutDirector;
