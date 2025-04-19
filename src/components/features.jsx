import React from 'react';

const feature = () =>{

    return (
        <>
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
        </>)


    }

export default feature;
