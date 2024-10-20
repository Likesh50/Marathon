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
          <p>
          <b>ALAMA ABACUS</b>, established in 2009, has been dedicated to nurturing students' mental math abilities across Tamil Nadu. Over the years, they have successfully helped students enhance their calculation speed and cognitive skills through specialized abacus training.           </p>
          <p>
          Recognizing their long-standing interaction with young learners, Alama Abacus took a step further by raising awareness on child abuse, aiming to create a safe environment for children. By integrating educational growth with social responsibility, Alama Abacus not only focuses on academic excellence but also on the overall well-being and protection of the students they serve.          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMarathon;
