import React from 'react';
import './About.css'; // Make sure this path is correct

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Ingredientify</h2>
          <p>
            <strong>Ingredientify</strong> is your personal food health assistant. We help you make informed food choices
            by scanning the ingredients of packaged food items and analyzing them against verified nutritional standards.
          </p>
          <p>
            With just a quick scan, you’ll get a detailed breakdown of the ingredients, a simplified health score,
            and a star-based rating (1 to 5) to help you instantly understand how healthy your food really is.
          </p>
          <p>
            Empower your lifestyle with smarter food decisions, and let Ingredientify guide you on your health journey.
          </p>
        </div>

        <div className="about-media">
          <img src="/images/about-scan.png" alt="Scanning ingredients" className="about-image" />
          <iframe
  className="about-video"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Ingredientify Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

        </div>
      </div>
    </section>
  );
};

export default About;
