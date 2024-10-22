import React from 'react';
import './AboutDirector.css';
import directorImage from '../assets/director.jpg'; // Add the correct path to the director's photo

const AboutDirector = () => {
  return (
    <div className="about-director-container">
      <div className="about-director">
        <div className="about-content">
          <h1>Beloved Director</h1>
          <h2>D<span style={{textTransform:"lowercase"}}>r.</span> M. Suresh Babu</h2>
          <h6 style={{marginTop:"-3%"}}>Trustee & Director</h6>
          <p>
          Dr. M. Suresh Babu has devoted over 30 years to dedicated service, emulating the
exemplary path of Gnana Guru Sri Sakthi Amma. His leadership and contributions
have made a significant and lasting impact on education, social welfare, and
spiritual well-being.              </p>
          <p>
          Dr. M. Suresh Babu is the Trustee and Director of Sripuram, Sri Narayani Peedam, Sri
Sakthi Amma Educational Trust (Sri Narayani Schools), Sri Sakthi Amma Tribal
Welfare Trust, and Sri Sakthi Amma Ancient and Holistic Health Care Trust.
In celebration of his birthday on November 21, 2024, a grand marathon is being
organized to honor his dedication to health, well-being, and community spirit                </p>
        </div>
        <div className="director-image">
          <img src={directorImage} style={{borderRadius:"20px 0px 30px 20px"}} alt="Director" />
        </div>
      </div>
    </div>
  );
};

export default AboutDirector;
