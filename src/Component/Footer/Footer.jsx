import React, { useState } from 'react';
import './Footer.css'; 

const Footer = () => {
    const [visit, setVisit] = useState(false)

   
  return (
    <footer className="footer">
      <div className="footer-content">
       
        <div className="contact-info">
            <h3>Contact me!!</h3>
          <p>Email: <a href="mailto:abhisheknigam735@gmail.com">abhisheknigam735@gmail.com</a></p>
          <p>Phone: <a href="tel:9084034477">+91 9084034477</a></p>
        </div>

       
        <div className="social-media">
          <a href="www.linkedin.com/in/abhishek-nigam-949103173" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> 
          </a>
          <a href="https://github.com/abhishekn1208" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> 
          </a>
          <a href="https://x.com/BITT0O?t=HHnVeP2Pr4r18gIJ5tNCvw&s=09" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> 
          </a>
          <a href="https://www.instagram.com/abhishek_nigam07" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> 
          </a>
        </div>
      </div>
      
      
      <div className="footer-bottom">
      <p
          style={{ cursor: 'pointer' }}
          onMouseEnter={() => setVisit(true)} 
          onMouseLeave={() => setVisit(false)} 
        >
         
          <span
            className={`heart-text ${visit ? 'heart-hide' : ''}`}
          >
            Made by <i>ME</i> with <span className="heart" role="img" aria-label="heart">❤️</span>
          </span>

         
          <span className={`tooltip ${visit ? 'show-tooltip' : ''}`}>
            Thank you for visiting
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
