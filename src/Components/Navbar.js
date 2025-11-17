import React from "react";
import { Link } from 'react-router-dom';
import '../Pages/Home.css';
import '../Pages/Products.css';
import logo from '../Components/Images/WellsAutoParts Logo.png';

function Navbar() {
  return (
    <div className="homepg">
      <header className="header">
        <div className="container">
          <nav className="nav">
            {/* Logo Section */}
            <Link to="/" className="logo">
              <img src={logo} alt="WellsAutoParts Logo" />
            </Link>

            {/* Navigation Links */}
            <ul className="nav-links">
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="actions">
              <Link to="/contact" className="contact">
                Contact us →
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
  
export default Navbar;
