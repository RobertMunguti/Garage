import React from "react";
import { Link } from 'react-router-dom';
import '../Pages/Home.css';
import '../Pages/Products.css';

function Footer(){
    return (
      <footer className="footer">
        <div className="container6">
            <div className="row">
                <div className="col-md-6">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <p className="copyright">
                    © Wells Auto Parts 2024, All Rights Reserved. 
                    Your trusted source for premium automotive spares.  
                    </p>
                    <div className="social-links">
                    <a href="#" className="social-link">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-linkedin-in"></i>
                    </a>    
                    </div>
                </div>
            </div>
        </div>
      </footer>
    );
};

export default Footer;
