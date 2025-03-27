import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Abhisek_resume.pdf'; 
    link.download = 'Abhishek_resume.pdf';  
    link.click();  
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header>
      <nav>
        <span>Abhishek</span>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><a href="#home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#stats">Statistics</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={downloadResume}>Resume</button>
       
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </header>
  );
};

export default Navbar;
