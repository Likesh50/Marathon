import React from 'react';
import './Sponsors.css'; // CSS file for styling

// Update with correct image extensions
import lion from '../assets/lion.jpg';
import rotry from '../assets/rotry.png';
import school from '../assets/school1.webp';
import sri from '../assets/sri.png';
import vit from '../assets/vit1.webp';
import hellofm from '../assets/hellofm.jpg';

const Sponsorss = () => {
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

export default Sponsorss;
