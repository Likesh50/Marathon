import React, { useState, useEffect } from "react";
import "./CountdownTimerr.css";
import logo from '../assets/logo.png';  // Importing the logo from the src/assets folder

const CountdownTimerr = () => {
  const eventDate = new Date("2024-11-17T06:00:00").getTime();

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
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
        {/* Mobile Register Button */}
        {isMobile && <button className="register-button mobile-register-button">Register</button>}
      </div>
      <div className="logo-container">
        <img src={logo} alt="Event Logo" /> {/* Displaying the logo */}
        {/* Desktop Register Button */}
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};

export default CountdownTimerr;
