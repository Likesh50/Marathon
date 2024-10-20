import React from 'react';
import './Sponsors.css'; // CSS file for styling
import sponsor1 from '../assets/cs1.png';
import sponsor2 from '../assets/cs2.png';
import sponsor3 from '../assets/cs3.png';
import sponsor4 from '../assets/cs4.png';
import sponsor5 from '../assets/cs5.png';
import sponsor6 from '../assets/cs6.png';
const Sponsors = () => {
  const sponsors = [
    { src: sponsor5, alt: 'Sri Sponsor' },
    { src: sponsor2, alt: 'Lion Sponsor', special: true }, // Second logo: Lion
    { src: sponsor4, alt: 'Rotry Sponsor' },
    { src: sponsor1, alt: 'VIT Sponsor', special: true }, // First logo: VIT
    { src: sponsor6, alt: 'Hello FM Sponsor' },
  ];

  return (
    <div className="sponsors-section">
      <h2 className="sponsors-title">CO - SPONSORS</h2>
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
