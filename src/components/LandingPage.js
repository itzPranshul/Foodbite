import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import custom CSS for styling
import ImageToText from './ImageToText';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Ingredientify</h1>
          <nav className="nav">
          <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/feature">Features</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/dashboard"><button className="get-started">Get Started</button></Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
<section className="hero">
<div className="container">
  <div className="hero-content">
    <h1>Scan, Simplify, and Choose Healthy</h1>
    <p>Discover the truth about your packaged food. Use our platform to scan ingredients and make healthier choices effortlessly.</p>
    <button className="cta-button"><ImageToText/>Try Now</button>
  </div>
  <div className="hero-image">
    <img src="/images/food-scan-hero.png" alt="Food Scan" />
    <img src="/public/images/food-scanning-illustration.png" alt="Food Scanning Illustration" />
  </div>
</div>
</section>

      

       {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Ingredientify. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
