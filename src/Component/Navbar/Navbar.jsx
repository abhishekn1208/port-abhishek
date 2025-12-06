import React, { useState } from "react";
import "./navbar.css";
import resume from "../../assets/resume.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header>
      <nav>
        <span className="logo">Abhishek</span>

        <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#About" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          {/* <li><a href="#stats" onClick={() => setIsMenuOpen(false)}>Statistics</a></li> */}
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          <li className="mobile-resume">
            <a href={resume} download="Abhishek_Resume.pdf">Resume</a>
          </li>
        </ul>

        <a href={resume} download="Abhishek_Resume.pdf" className="desktop-resume">
          Resume
        </a>

        <div className={`hamburger ${isMenuOpen ? "toggle" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
