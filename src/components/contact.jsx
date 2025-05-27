import React from 'react';
import './contact.css'; // Ensure this path is correct based on your file structure

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? We'd love to hear from you!</p>

        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="John Doe" />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="you@example.com" />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="Write your message..."></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
