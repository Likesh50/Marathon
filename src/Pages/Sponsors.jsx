import React from 'react';
import './Sponsors.css'; // CSS file for styling
import sponsor1 from '../assets/cs1.png';
import sponsor2 from '../assets/cs2.png';
import sponsor3 from '../assets/cs3.png';
import sponsor4 from '../assets/tslogo2.png';
import sponsor5 from '../assets/arteg.png';
import sponsor6 from '../assets/cs6.png';
import sponsor7 from '../assets/sri.png';

const Sponsors = () => {
  const sponsors = [
    { src: sponsor4, alt: '' },
    { src: sponsor7, alt: '' },
    { src: sponsor6, alt: '' },
    { src: sponsor2, alt: '', special: true },
    { src: sponsor1, alt: '', special: true },
    { src: sponsor5, alt: '' },
  ];

  return (
    <div className="sponsors-section">
      <h3 className="sponsors-title">CO - SPONSORS</h3>
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
