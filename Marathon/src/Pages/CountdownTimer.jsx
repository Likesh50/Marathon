import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";
import logo from '../assets/logo.png';  // Importing the logo from the src/assets folder

const CountdownTimer = () => {
  const eventDate = new Date("2024-10-24T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-timer">
        <h2>EVENT STARTS IN</h2>
        <div className="time">
          <div className="time-unit">{timeLeft.days || "0"}<span>DAYS</span></div>
          <div className="time-unit">{timeLeft.hours || "0"}<span>HOURS</span></div>
          <div className="time-unit">{timeLeft.minutes || "0"}<span>MINUTES</span></div>
          <div className="time-unit">{timeLeft.seconds || "0"}<span>SECONDS</span></div>
        </div>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Event Logo" /> {/* Displaying the logo */}
      </div>
    </div>
  );
};

export default CountdownTimer;