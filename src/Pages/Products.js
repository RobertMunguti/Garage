import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Products.css';
import logo from '../Components/Images/WellsAutoParts Logo.png';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


function Products() {
  const [selectedYear, setSelectedYear] = useState(null);

  const images = {
    '4Runner': require('../Components/Images/4Runner.jpeg'),
    'Agya/Wigo': require('../Components/Images/wigo1.jpeg'),
    'Alphard/Vellfire': require('../Components/Images/velfire.jpeg'),
    'Altezza/Altezza Gita': require('../Components/Images/Altezza.jpeg'),
    'Aqua': require('../Components/Images/aqua.jpg'),
    'Aristo': require('../Components/Images/aristo.jpeg'),
    'Avalon': require('../Components/Images/Avalon.jpeg'),
    'Avanza': require('../Components/Images/Avanza.jpeg'),
    'Auris': require('../Components/Images/auris.jpeg'),
    'Avensis': require('../Components/Images/Avensis.jpeg'),
    'Aygo': require('../Components/Images/aygo.jpeg'),
  };

  const cars = {
    '2010-2024': [
      { name: '4Runner', link: '/4Runner' },
      { name: 'Agya/Wigo', link: '/Agya/Wigo' },
      { name: 'Alphard/Vellfire', link: '/Alphard/Vellfire' },
      { name: 'Altezza/Altezza Gita', link: '/Altezza/Altezza Gita' },
    ],
    '2000-2009': [
      { name: 'Aqua', link: '/Aqua' },
      { name: 'Aristo', link: '/Aristo' },
      { name: 'Avalon', link: '/Avalon' },
      { name: 'Avanza', link: '/Avanza' },
    ],
    '1990-1999': [
      { name: 'Auris', link: '/Auris' },
      { name: 'Avensis', link: '/Avensis' },
      { name: 'Aygo', link: '/Aygo' },
    ],
    
  };

  return (
    <div className="productspage">
      <header className="header">
        <div className="container">
         <Navbar />
        </div>
      </header>  

      <main className="vehicle-brands">
        <div className="container6">
          <h2 className="section-title">Explore Our Vehicle Brands</h2>
          <p className="section-description">
            WellsAutoParts store is your premier destination for genuine Toyota car parts. 
            Our comprehensive inventory spans an array of Toyota car models. 
            We ensure top-notch quality as all our stock consists of authentic Toyota parts.
            Navigate our seamless, user-friendly platform for straightforward purchases, and enjoy our efficient countrywide shipping services. 
            Regardless of your location, we ensure quick and secure delivery.
          </p>
        </div>
      </main>

       {/*<div className="app">
        <div className="header2">
       <h1>Genuine Toyota Parts</h1> 
          <p>Parts Store with Worldwide Delivery</p>
          <img src="https://www.toyota.com/assets/images/global/toyota-logo.png" alt="Toyota Logo" className="logo" />  
        </div>  
      </div>  
      */} 

      <div className="car-list">
        <div className="year-filters">
         {/*<h1>Years</h1>*/} 
          <div className="filter-buttons">
            {Object.keys(cars).map((year) => (
              <button
                key={year}
                className="filter-button"
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
            <button
              className="filter-button"
              onClick={() => setSelectedYear(null)}
            >
              Show All
            </button>
          </div>
        </div>

        <div className="car-grid">
          {Object.keys(cars).map((year) => {
            const carModels = cars[year];
            const isSelected = selectedYear === year;

            return (
              <div key={year} style={{ display: isSelected || selectedYear === null ? 'flex' : 'none', flexWrap: 'wrap' }}>
                {carModels.map((car) => (
                  <div key={car.name} className="car-card">
                    <img src={images[car.name]} alt={car.name} className="car-image" loading="lazy" />
                    <Link to={car.link} className="car-name">{car.name}</Link>
                  </div>
                ))}
              </div>
            );
          })}
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
