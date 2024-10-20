import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light custom-navbar"> {/* Change to navbar-expand-md */}
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Brand Logo" className="brand-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center flex-grow-1">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link" href="#hero">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-marathon">ABOUT MARATHON</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-director">ABOUT DIRECTOR</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#countdown-timer">COUNTDOWN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#price-component">PRICING</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#race-category">RACE CATEGORY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sponsors">SPONSORS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">CONTACT</a>
              </li>
            </ul>
            <a href="YOUR_GOOGLE_FORMS_LINK" className="btn btn-register">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
