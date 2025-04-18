import React from 'react';
import './LandingPage.css'; // Import custom CSS for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Ingredientify</h1>
          <nav className="nav">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><button className="get-started">Get Started</button></li>
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
            <button className="cta-button">Try Now</button>
          </div>
          <div className="hero-image">
            <img src="/images/food-scan-hero.png" alt="Food Scan" />
            <img src="/public/images/food-scanning-illustration.png" alt="Food Scanning Illustration" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <img src="/images/scan.png" alt="Scan" />
              <h3>Scan Ingredients</h3>
              <p>Quickly scan food labels to get detailed insights about the ingredients.</p>
            </div>
            <div className="feature-item">
              <img src="/images/star-rating.png" alt="Rating" />
              <h3>Health Ratings</h3>
              <p>Get a healthiness rating from 1 to 5 stars based on nutritional value.</p>
            </div>
            <div className="feature-item">
              <img src="/images/dashboard.png" alt="Dashboard" />
              <h3>Personalized Dashboard</h3>
              <p>Track your food choices and health journey with a user-friendly dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>About Ingredientify</h2>
          <p>Ingredientify is your companion for making healthier food choices. By scanning food labels, it helps you understand what you're eating and provides a simplified, health-focused rating system.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
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
