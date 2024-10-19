import React from 'react';
import './AboutDirector.css';
import directorImage from '../assets/director.jpg'; // Add the correct path to the director's photo

const AboutDirector = () => {
  return (
    <div className="about-director-container">
      <div className="about-director">
        <div className="about-content">
          <h1>About the Director</h1>
          <h2>Dr. M. Suresh Babu</h2>
          <p>
            Dr. M. Suresh Babu has been serving the community with dedication and passion for over 35 years, working alongside Sri Sakthi Amma to bring positive change. His leadership and vision have been instrumental in numerous projects that focus on child protection, education, and community development.
          </p>
          <p>
            As the director, his efforts continue to inspire and uplift those around him, fostering an environment of compassion and growth. Join us in celebrating his remarkable achievements and unwavering commitment to society.
          </p>
        </div>
        <div className="director-image">
          <img src={directorImage} alt="Director" />
        </div>
      </div>
    </div>
  );
};

export default AboutDirector;
