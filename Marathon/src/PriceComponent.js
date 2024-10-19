import React from 'react';
import './PriceComponent.css'; // Corrected the import statement

// Import your logo images
import medalLogo from './prices/finisher-medal.png';
import tshirtLogo from './prices/race-jersey.png';
import certificateLogo from './prices/timing-certificate.png';
import breakfastLogo from './prices/food_2771460.png';

const ExclusiveItems = () => {
  const items = [
    { logo: medalLogo, text: 'A dazzling finisher’s medal' },
    { logo: tshirtLogo, text: 'Official race-day T-shirt' },
    { logo: certificateLogo, text: 'Certificate for all finishers' },
    { logo: breakfastLogo, text: 'Breakfast' }
  ];

  return (
    <div className="exclusive-items">
      <h2>Get our exclusives and much more..</h2>
      <div className="items-grid">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.logo} alt={item.text} className="logo" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveItems;
