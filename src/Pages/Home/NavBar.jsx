import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
      <label htmlFor="navbar-toggle" className="navbar-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="navbar-links">
        <li><a href="#section1">Home</a></li>
        <li><a href="#section2">About</a></li>
        <li><a href="#section3">Services</a></li>
        <li><a href="#section4">Portfolio</a></li>
        <li><a href="#section5">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
