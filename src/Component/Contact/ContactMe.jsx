import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required!');
    } else {
      setError('');
      setIsSending(true);

      
      emailjs
        .sendForm(
          'service_e5fwtzv',       
          'template_b2wo4pi',      
          e.target,              
          'YDb4hKPKMIKVVH8nf'         
        )
        .then(
          (result) => {
            console.log('Message Sent:', result.text);
            alert('Message sent successfully!');
            setFormData({
              name: '',
              email: '',
              message: ''
            });
            setIsSending(false); // Reset loading state
          },
          (error) => {
            console.log('Error:', error.text);
            alert('Error sending message. Please try again.');
            setIsSending(false); // Reset loading state
          }
        );
    }
  };

  return (
    <div id='contact'>
      <div className="contact-me-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="submit-btn" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>

    </div>
      );
};

export default ContactMe;
