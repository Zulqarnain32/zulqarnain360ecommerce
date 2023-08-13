import React, { useState } from 'react';
import { Link } from "react-router-dom"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-parent">
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <h2 className='contact-title'>Contact Us</h2>
        <div className="form-group">
            <h3>Name</h3>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
            <h3>Email</h3>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
            <h3>Message</h3>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className='submit-btn'><Link to = "/" className='home'>Submit</Link></button>
      </form>
    </div>
    
  </div> 
  
  );
};

export default Contact;


