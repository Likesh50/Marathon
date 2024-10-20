import React from 'react';
import './PrizeTable.css';

// Import medal images
import medal4 from '../assets/4.png';
import medal5 from '../assets/5.png';
import medal6 from '../assets/6.png';
import medal7 from '../assets/7.png';
import medal8 from '../assets/8.png';
import medal9 from '../assets/9.png';
import medal10 from '../assets/10.png';

const PrizeTable = () => {
  const prizes = [
    { rank: '4th', amount: '₹5000', medal: medal4 },
    { rank: '5th', amount: '₹4000', medal: medal5 },
    { rank: '6th', amount: '₹3000', medal: medal6 },
    { rank: '7th', amount: '₹2000', medal: medal7 },
    { rank: '8th', amount: '₹1000', medal: medal8 },
    { rank: '9th', amount: '₹1000', medal: medal9 },
    { rank: '10th', amount: '₹1000', medal: medal10 },
  ];

  return (
    <div className='priceContainer'>
    <div className="prize-card-container">
      <div className="prize-card-grid">
        {prizes.map((prize, index) => (
          <div key={index} className="prize-card">
            <img src={prize.medal} alt={`${prize.rank} medal`} className="prize-medal" />
            <p className="prize-amount">{prize.amount} + Trophy</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PrizeTable;
