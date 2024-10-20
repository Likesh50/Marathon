import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 style={{color:"white"}}>ALAMA ABACUS</h2>
        <div className="footer-info">
          <p><FaMapMarkerAlt /> No: 1A TKT Complex, Krishna Nagar, Vellore 632 001, TAMILNADU</p>
          <div style={{display:"flex", gap:"20px"}}>
          <p className="footer-phone"><FaPhoneAlt /> <a href="tel:7092377999">70923 77999</a></p>
          <p className="footer-phone"><FaPhoneAlt /> <a href="tel:7092377999">0416 - 2226009</a></p>
          </div>
        </div>
      </div>
      <div className="footer-general-content">
        <p>&copy; {new Date().getFullYear()} ALAMA ABACUS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
