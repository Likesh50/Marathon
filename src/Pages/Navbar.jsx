import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  // Function to close the navbar when a link is clicked
  const handleLinkClick = () => {
    const navbarToggler = document.getElementById('navbarTogglerDemo03');
    if (navbarToggler) {
      navbarToggler.classList.remove('show'); // Close the navbar
    }
  };

  return (
    <nav className="navbar navbar-expand-xl navbar-light custom-navbar">
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
                <a className="nav-link" href="#hero" onClick={handleLinkClick}>HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-marathon" onClick={handleLinkClick}>ABOUT MARATHON</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-director" onClick={handleLinkClick}>ABOUT DIRECTOR</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#race-category" onClick={handleLinkClick}>RACE CATEGORY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#price-component" onClick={handleLinkClick}>PRIZE MONEY</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#sponsors" onClick={handleLinkClick}>SPONSORS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer" onClick={handleLinkClick}>CONTACT</a>
              </li>
            </ul>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScv6o_-2GkZ1FxxGWMYn03_4zOPCG2lurpbf0OXi8OxSqKUag/viewform?usp=sf_link" className="btn btn-register" onClick={handleLinkClick}>
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
