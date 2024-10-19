import React from 'react';
import './AboutMarathon.css';
import marathonImage from '../assets/Aboutphoto.jpg';

const AboutMarathon = () => {
  return (
    <div className="about-marathon-container">
      <div className="about-marathon">
        <div className="marathon-image">
          <img src={marathonImage} alt="Marathon Awareness" />
        </div>
        <div className="about-content">
          <h1>About the Marathon</h1>
          <h2>Raise Awareness Against Child Abuse</h2>
          <p>
            This marathon is dedicated to raising awareness about child abuse, a pressing issue affecting the lives of millions of children globally. Join us in this endeavor to support the protection and well-being of children and help bring about a future where every child can grow up free from harm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMarathon;
