import React from "react";
import './coSponsors.css';

// Import images
import sponsor1 from '../assets/cs1.png';
import sponsor2 from '../assets/cs2.png';
import sponsor3 from '../assets/cs3.png';
import sponsor4 from '../assets/cs4.png';
import sponsor5 from '../assets/cs5.png';
import sponsor6 from '../assets/cs6.png';

const CoSponsors = () => {
  return (
    <div className="cosponsors-container">
      <h2>Co-Sponsors</h2>
      <div className="cosponsor-row">
        <div className="cosponsor-item">
          <img src={sponsor1} alt="Sponsor 1" />
          <p>Co-Sponsors</p>
        </div>
        <div className="cosponsor-item">
          <img src={sponsor2} alt="Sponsor 2" />
          <p>Co-Sponsors</p>
        </div>
        <div className="cosponsor-item">
          <img src={sponsor3} alt="Sponsor 3" />
          <p>Co-Sponsors</p>
        </div>
        <div className="cosponsor-item">
          <img src={sponsor4} alt="Sponsor 4" />
          <p>Co-Sponsors</p>
        </div>
        <div className="cosponsor-item">
          <img src={sponsor5} alt="Sponsor 5" />
          <p>Co-Sponsors</p>
        </div>
        <div className="cosponsor-item">
          <img src={sponsor6} alt="Sponsor 6" />
          <p>Media Sponsor</p>
        </div>
      </div>
    </div>
  );
};

export default CoSponsors;
