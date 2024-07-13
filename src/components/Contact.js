import React, { useState } from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaFiverr,
  FaUpwork,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your own logic to send the email, e.g., using an API
    alert(`Message sent by ${formData.email}: ${formData.message}`);
    setFormData({
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.fiverr.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFiverr />
        </a>
        <a
          href="https://www.upwork.com/freelancers/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUpwork />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope />
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
