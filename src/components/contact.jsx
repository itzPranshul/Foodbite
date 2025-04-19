import React from 'react';

const contact = () => {
    return (
    <>
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
    </>
    )
}

export default contact;