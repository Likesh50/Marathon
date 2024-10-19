import React from 'react';
import './Sponsors.css'; // CSS file for styling

// Update with correct image extensions
import lion from './img/lion.jpg';
import rotry from './img/rotry.png';
import school from './img/school1.webp';
import sri from './img/sri.png';
import vit from './img/vit1.webp';
import hellofm from './img/hellofm.jpg';

const Sponsors = () => {
  const sponsors = [
    { src: vit, alt: 'VIT Sponsor', special: true }, // First logo: VIT
    { src: lion, alt: 'Lion Sponsor', special: true }, // Second logo: Lion
    { src: school, alt: 'School Sponsor', special: true }, // Third logo: School
    { src: rotry, alt: 'Rotry Sponsor' },
    { src: sri, alt: 'Sri Sponsor' },
    { src: hellofm, alt: 'Hello FM Sponsor' },
  ];

  return (
    <div className="sponsors-section">
      <h2 className="sponsors-title">SPONSORS</h2>
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <div className={`sponsor-item ${sponsor.special ? 'vit-background' : ''} ${sponsor.alt === 'School Sponsor' ? 'school-logo' : ''}`} key={index}>
            <img src={sponsor.src} alt={sponsor.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
