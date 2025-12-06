import React from "react";
import "./about.css";
import image from "../../assets/abhishek.jpeg";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <section id="About" className="about-section">
      <h1 className="heading">
        About <span>Me</span>
      </h1>

      <div className="aboutContent">
        <div className="aboutImg">
          <img src={image} alt="Profile" />
        </div>

        <div className="aboutText">
          <p>
            Full Stack Developer with 1 year of intensive MERN stack training
            at Masai School and 7+ months of professional experience
            building scalable and efficient web applications.
            Hands-on experience with React, TypeScript, MongoDB,
            REST APIs, performance optimization, and secure authentication systems.
            Passionate about problem-solving, UI/UX enhancements,
            and learning Gen-AI tools to build impactful solutions.
          </p>

          <a href={resume} download="Abhishek-Nigam-Resume.pdf" className="resumeBtn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
