import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const fileInputRef = useRef(null);

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <h1 className="logo">Ingredientify</h1>
          <nav className="nav">
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/feature">Features</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Scan, Simplify, and Choose Healthy</h1>
            <p>
              Reveal the real story behind your packaged food. Scan ingredients instantly and
              make informed, healthy decisions.
            </p>
            <div className="camera-upload">
              <button className="camera-button" onClick={handleCameraClick}>
                <img
                  src="creative-colorful-camera-logo-design-symbol-vector-illustration-150574893.webp"
                  alt="Camera"
                />
                <span>Scan Now</span>
              </button>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </div>
          </div>
          <div className="hero-images">
            <img src="istockphoto-883143246-612x612.jpg" alt="Scanning Food" />
            {/* You can uncomment or add more packaged food/scan-related illustrations */}
            {/* <img src="/images/packaged-food-display.png" alt="Packaged Food" /> */}
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
