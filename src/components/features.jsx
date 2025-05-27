import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Feature.css';

const Features = () => {
  const navigate = useNavigate();

  const handleScanClick = () => {
    navigate('/scan');
  };

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <h2 className="features-title">Key Features</h2>
        <div className="features-list">

          <div 
            className="feature-item" 
            onClick={handleScanClick}
            style={{ cursor: 'pointer' }}
          >
            <div className="feature-icon" aria-hidden="true">📷</div>
            <h3>Scan Ingredients</h3>
            <p>Quickly scan food labels to get detailed insights about the ingredients.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon" aria-hidden="true">⭐</div>
            <h3>Health Ratings</h3>
            <p>Get a healthiness rating from 1 to 5 stars based on nutritional value.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon" aria-hidden="true">📊</div>
            <h3>Personalized Dashboard</h3>
            <p>Track your food choices and health journey with a user-friendly dashboard.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
