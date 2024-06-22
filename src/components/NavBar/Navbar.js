import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ about: false, services: false });

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (name) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <Link to={"/"} className="navbar-link">Úvod</Link>
        <div className="navbar-dropdown" onMouseEnter={() => toggleDropdown('about')} onMouseLeave={() => toggleDropdown('about')}>
        <Link to={"/DivadloDI"} className="navbar-link" onClick={() => toggleDropdown('about')}>Divadlo DI ▼</Link>
          <div className={`dropdown-menu ${dropdownOpen.about ? 'show' : ''}`}>
          <Link to={"/DivadloDI"} onClick={() => window.location.replace("/DivadloDI/#di")} className="dropdown-item">DI</Link>
          <Link to={"/DivadloDI"} onClick={() => window.location.replace("/DivadloDI/#team")} className="dropdown-item">Herci</Link>
          <Link to={"/"} className="dropdown-item">Spolutvůrci</Link>
          </div>
        </div>
        <div className="navbar-dropdown" onMouseEnter={() => toggleDropdown('services')} onMouseLeave={() => toggleDropdown('services')}>
        <Link to={"/repertoar"} className="navbar-link" onClick={() => toggleDropdown('services')}>Repertoár ▼</Link>
          <div className={`dropdown-menu ${dropdownOpen.services ? 'show' : ''}`}>
          <Link to={"/repertoar/#forKids"} onClick={() => window.location.replace("/repertoar/#forKids")} className="dropdown-item">Pro děti</Link>
          <Link to={"/repertoar/#forAdult"} onClick={() => window.location.replace("/repertoar/#forAdult")} className="dropdown-item">Pro dospělé</Link>
          <Link to={"/repertoar/#archive"} onClick={() => window.location.replace("/repertoar/#archive")} className="dropdown-item">Archiv</Link>
          </div>
        </div>
        <Link to={"/"} className="navbar-link">Program</Link>
        <Link to={"/contacts"} className="navbar-link">Kontakt</Link>
        <a href="https://www.instagram.com/divadelier?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="navbar-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`navbar-mobile-links ${isOpen ? 'open' : ''}`}>
      <Link to={"/"} className="navbar-link">Úvod</Link>
        <div className="navbar-dropdown-mobile">
        <Link to={"/DivadloDI"} className="navbar-link" onClick={() => toggleDropdown('about')}>Divadlo DI ▼</Link>
          <div className={`dropdown-menu-mobile ${dropdownOpen.about ? 'show' : ''}`}>
          <Link to={"/"} className="dropdown-item">DI</Link>
          <Link to={"/"} className="dropdown-item">Herci</Link>
          <Link to={"/"} className="dropdown-item">Spolutvůrci</Link>
          </div>
        </div>
        <div className="navbar-dropdown-mobile">
        <Link to={"repertoar"} className="navbar-link" onClick={() => toggleDropdown('services')}>Repertoár ▼</Link>
          <div className={`dropdown-menu-mobile ${dropdownOpen.services ? 'show' : ''}`}>
          <Link to={"/"} className="dropdown-item">Pro děti</Link>
          <Link to={"/"} className="dropdown-item">Pro dospělé</Link>
          <Link to={"/"} className="dropdown-item">Archiv</Link>
          </div>
        </div>
        <Link to={"/"} className="navbar-link">Program</Link>
        <Link to={"contacts"} className="navbar-link">Kontakt</Link>
        <a href="https://www.instagram.com/divadelier?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="navbar-mobile-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
