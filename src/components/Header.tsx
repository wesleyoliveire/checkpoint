import React from 'react';
import '../styles/Header.css';
import logo from '../assets/images/logo.svg';
import menuIcon from '../assets/icons/menu.svg';
import searchIcon from '../assets/icons/search.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Ratings Logo" className="logo" />
      </div>
      <div className="menu-container">
        <img src={menuIcon} alt="Menu" className="menu-icon" />
        <span className="menu-text">Menu</span>
      </div>
      <div className="search-container">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="login-button">
        <span className="login-text">Login</span>
      </div>
    </header>
  );
};

export default Header;
