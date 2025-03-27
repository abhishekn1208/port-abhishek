import React from "react";
import "./about.css";
import image from '../../assets/D3ST.png'; 
import resume from '../../assets/resume.pdf'


const About = () => {
  // const downloadResume = () => {
  //   const link = document.createElement('a');
  //   link.href = '/abhisek_resume.pdf'; 
  //   link.download = 'abhishek_resume.pdf';  
  //   link.click();  
  // };
  return (
    <div id="About">
      <div className="About">
      <h1>
        About <span>Me</span>
      </h1>
      <div className="aboutDesc">
        <div className="profileImg">
          <img src={image} alt="profile photo"/>
        </div>
        <div className="paragraph">
          <p>
            Driven and adaptable Full Stack Web Developer with expertise in the
            MERN stack, including MongoDB, Express.js, React, and Node.js.
            Skilled in designing scalable web applications and implementing
            RESTful APIs. Capable of using Generative AI and quickly learning
            new technologies to enhance development workflows.
          </p>
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <button><a href={resume} download='resume'>Resume</a></button>
      </div>
    </div>

    </div>
      );
};

export default About;
