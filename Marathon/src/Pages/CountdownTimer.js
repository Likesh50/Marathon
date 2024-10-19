import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';  // Import external CSS

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-10-22T00:00:00').getTime();
    const currentTime = new Date().getTime();
    const timeDifference = eventDate - currentTime;

    let timeLeft = {};
    if (timeDifference > 0) {
      timeLeft = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDifference / 1000 / 60) % 60),
        seconds: Math.floor((timeDifference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="countdown-container">
      <h1 className="countdown-title">EVENT START IN</h1>
      <div className="countdown-timer">
        <div className="time-box">
          <span className="time-number">{timeLeft.days || 0}</span>
          <div className="time-label">DAYS</div>
        </div>
        <div className="time-box">
          <span className="time-number">{timeLeft.hours || 0}</span>
          <div className="time-label">HOURS</div>
        </div>
        <div className="time-box">
          <span className="time-number">{timeLeft.minutes || 0}</span>
          <div className="time-label">MINUTES</div>
        </div>
        <div className="time-box">
          <span className="time-number">{timeLeft.seconds || 0}</span>
          <div className="time-label">SECONDS</div>
        </div>
      </div>
      <button className="register-button">REGISTER NOW</button>
    </div>
  );
};

export default CountdownTimer;
