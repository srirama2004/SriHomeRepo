import React from 'react';
import linkedInImage from './pic/linkedin.jpg'; // Adjust the path as needed
import './Contact.css'; // Ensure this file exists in the same directory

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">Message me on LinkedIn 😊.</p>
      
      <a href="https://www.linkedin.com/in/srirama-v-b5bb32293/" target="_blank" rel="noopener noreferrer">
        <img src={linkedInImage} alt="LinkedIn" className="social-icon" />
      </a>
      
      <div className="contact-email-container">
        <p className="contact-email-description">Or mail to:</p>
        <a href="mailto:sriramavate2@gmail.com" className="contact-email-link">sriramavate2@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;
