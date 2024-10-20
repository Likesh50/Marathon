import React from 'react';
import './PrizeTable.css';

const PrizeTable = () => {
  const prizes = [
    { rank: '4th', amount: '$500' },
    { rank: '5th', amount: '$400' },
    { rank: '6th', amount: '$300' },
    { rank: '7th', amount: '$200' },
    { rank: '8th', amount: '$150' },
    { rank: '9th', amount: '$100' },
    { rank: '10th', amount: '$50' },
  ];

  return (
    <div className="prize-card-container">
      <h1 className="prize-title">Top 10 Prizes</h1>
      <div className="prize-card-grid">
        {prizes.map((prize, index) => (
          <div key={index} className="prize-card">
            <h2 className="prize-rank">{prize.rank}</h2>
            <p className="prize-amount">{prize.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizeTable;
