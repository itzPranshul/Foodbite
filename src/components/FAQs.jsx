import React, { useState } from 'react';
import './FAQs.css';

const faqsData = [
  {
    question: "What does Ingredientify do?",
    answer: "Ingredientify helps you scan the ingredients on packaged food and provides a health rating based on the nutritional content and food safety standards."
  },
  {
    question: "How is the health rating calculated?",
    answer: "The rating is calculated using a combination of nutritional data like sugar, fat, sodium, preservatives, and more. We follow guidelines from FSSAI and other global standards."
  },
  {
    question: "What types of food can I scan?",
    answer: "You can scan any packaged food item with a visible ingredients label. Our app is optimized for most common Indian and global brands."
  },
  {
    question: "Is my data stored anywhere?",
    answer: "No, your scan data is processed securely and temporarily. We do not store any personal images or ingredient data unless you create an account and opt-in."
  },
  {
    question: "Can I trust the health scores completely?",
    answer: "Our health scores are meant to guide healthier decisions, not replace professional dietary advice. Always consult a doctor or nutritionist for medical concerns."
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqsData.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
              </div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
