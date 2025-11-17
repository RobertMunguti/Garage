import React from "react"; 
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../Components/Images/WellsAutoParts Logo.png';
import carengine from '../Components/Images/Car Engine.jpg';
import worldImage from '../Components/Images/world.jpg';
import support from '../Components/Images/support.avif';
import quality from '../Components/Images/quality.jpg';
import engineImage from '../Components/Images/engineparts.webp'; 
import brakeComponentImage from '../Components/Images/brakecomponents.jpg'; 
import lightingSystemImage from '../Components/Images/lighteningsystem.jpg'; 
import tireWheelImage from '../Components/Images/tire.jpg'; 
import interiorAccessoryImage from '../Components/Images/interior.jpeg'; 
import johnDoe from '../Components/Images/john.jpeg';
import janeSmith from '../Components/Images/jane.jpeg';
import mikeJohnson from '../Components/Images/mike.jpeg';
import car2 from '../Components/Images/car2.jpg'; 
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const partsData = [
  {
    image: engineImage,  
    title: 'Engine Parts',
  },
  {
    image: brakeComponentImage,  
    title: 'Brake Components',
  },
  {
    image: lightingSystemImage,  
    title: 'Lighting Systems',
  },
  {
    image: tireWheelImage,  
    title: 'Tire and Wheel',
  },
  {
    image: interiorAccessoryImage,  
    title: 'Interior Accessories',
  },
];

function Home() {
    return (
      <div className="homepg">
        <div className="homepage">
          <Navbar />
            <div className="container">             
            </div>
          <main className="main">
            <div className="container">
              <div className="hero">
                <div className="hero-content">
                  <h2>Your Trusted Source for Premium Automotive Spares</h2>
                  <h1>Welcome to Wells Auto Parts</h1>
                  <p>
                    Your one-stop-shop for high-quality Toyota parts and accessories in Kenya. 
                    We offer a wide range of automotive products, including general parts, lubricants, power train, electrical, and body parts. 
                    Additionally, we have an extensive inventory of parts for all types of cars—ensuring that we have the parts you need for your vehicle.
                  </p>
                  <div className="buttons">
                    <Link to="/quote" className="button">
                      Get a Quote
                    </Link>
                    <Link to="./Products.js" className="button">
                      Browse Products →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        
        <h1 className="container2header">Why Choose Us?</h1>
        <div className="container2">       
          <div className="left">    
            <p>Discover the benefits of shopping with Wells Auto Parts. From high-quality spares to exceptional customer service,
            we have everything you need to keep your vehicle running smoothly.</p>
            <div className="icon">
              <img className="icon-img" src={worldImage} alt="World Icon" />
              <h2>Wide Range of Brands</h2>
              <p>We offer parts for a variety of vehicle brands including Toyota, Audi, and Mercedes.</p>
            </div>
            <div className="icon">
              <img className="icon-img" src={support} alt="Expert Support Icon" />
              <h2>Expert Support</h2>
              <p>Our team of experts is always ready to assist you with any inquiries.</p>
            </div>
            <div className="icon">
              <img className="icon-img" src={quality} alt="Quality Assurance Icon" />
              <h2>Quality Assurance</h2>
              <p>All our parts are thoroughly inspected to ensure they meet the highest standards.</p>
            </div>
          </div>
          <div className="right"></div>
        </div>

        <div className="app-container">
          <div>
            <h1>Our Premium Parts</h1>
            <p>
              Take a look at some of the top-quality automotive parts we offer. From
              engines to brakes, we have everything you need.  
            </p>
          </div>
          <div className="parts-grid">
            {partsData.map((part, index) => (
              <div key={index} className="part-card">
                <img src={part.image} alt={part.title} />
                <div className="part-title">{part.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="container3">
          <div className="title">
            <p className="trusted">Trusted by Thousands</p>
            <h1>Our Achievements</h1>
          </div>
          <div className="content">
            <p>Wells Auto Parts has been a trusted name in the automotive industry for years. 
              Our commitment to quality and customer satisfaction sets us apart.</p>
            <p>Join thousands of satisfied customers who rely on us for their automotive needs.</p>
          </div>
         {/*  <div className="image">
            <img src="https://images.unsplash.com/photo-1507667912646-28003607694b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="warehouse" />
          </div> */}
          <div className="stats">
            <div className="stat">
              <h2>1998</h2>
              <p>Founded</p>
            </div>
            <div className="stat">
              <h2>500,000+</h2>
              <p>Parts Sold</p>
            </div>
            <div className="stat">
              <h2>20,000+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h2>30</h2>
              <p>Awards Won</p>
            </div>
          </div>

          
        </div>

        <div className="container4">
          <h1 className="title2">Ready to Get Started?</h1>
          <p className="description">
            Explore our wide range of automotive parts and experience the Wells
            Auto Parts difference today.
          </p>
          <div className="buttons2">
            <button className="shop-now">Shop Now</button>
            <a href="" className="contact-us">Contact Us →</a>
          </div>
        </div>

        <div className="container5">
          <h1>Customer Testimonials</h1>
          <p>5 Reviews</p>
          <div className="testimonial">
            <div className="rating">
              <span className="star">★★★★★</span>
              <span className="category">for Product Quality</span>
            </div>
            <p>The parts I ordered were of excellent quality and arrived quickly. Highly recommend Wells Auto Parts!</p>
            <div className="author">
              <img src={johnDoe} alt="John Doe" />
              <span>John Doe</span>
            </div>
            <span className="date">January 10, 2024</span>
          </div>
          <div className="testimonial">
            <div className="rating">
              <span className="star">★★★★★</span>
              <span className="category">for Customer Service</span>
            </div>
            <p>Amazing customer service! They helped me find the exact part I needed.</p>
            <div className="author">
              <img src={janeSmith} alt="Jane Smith" />
              <span>Jane Smith</span>
            </div>
            <span className="date">February 15, 2024</span>
          </div>
          <div className="testimonial">
            <div className="rating">
              <span className="star">★★★★★</span>
              <span className="category">for Delivery Speed</span>
            </div>
            <p>Super fast delivery and the parts were exactly as described. Will definitely order again.</p>
            <div className="author">
              <img src={mikeJohnson} alt="Mike Johnson" />
              <span>Mike Johnson</span>
            </div>
            <span className="date">March 5, 2024</span>
          </div>
        </div>
        
        <Footer />
      </div>
    );
}

export default Home;