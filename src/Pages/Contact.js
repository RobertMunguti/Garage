import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

function Contact(){
    return (
        <header className="header">
            <div className="container">
              <nav className="nav">
                <Link to="/" className="logo">
                  Ca
                </Link>
                <ul className="nav-links">
                  <li>
                    <Link to="/">Homepage</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
                <div className="actions">
                  <Link to="/join" className="join">
                    Join us →
                  </Link>
                  <Link to="/contact" className="contact">
                    Contact us →
                  </Link>
                </div>
              </nav>
            </div>
          </header>
    )
}

export default Contact;