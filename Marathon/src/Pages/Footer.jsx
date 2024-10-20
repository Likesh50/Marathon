import React from 'react';
import './Footer.css';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2>Sri Mementos</h2>
        <div className="footer-info">
          <p><FaMapMarkerAlt /> No: 1A TKT Complex, Krishna Nagar, Vellore 632 001, TAMILNADU</p>
          <p className="footer-phone"><FaPhone /> <a href="tel:7092377999">70923 77999</a></p>
        </div>
      </div>
      <div className="footer-general-content">
        <p>&copy; {new Date().getFullYear()} Sri Mementos. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
