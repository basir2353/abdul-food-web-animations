import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={`header ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?size=626&ext=jpg"
          alt="Chef Logo"
          className="logo-image"
        />
        <h1 className="logo-text">Chef Place</h1>
      </div>
      <div className="menu-toggle" onClick={toggleSidebar}>
        <div className={`menu-icon ${isSidebarOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`navigation ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleSidebar}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={toggleSidebar}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
