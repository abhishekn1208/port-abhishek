import React from "react";
import "./home.css";
import { FaFileDownload, FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <h1 className="heading">
          Hi, I'm <span>Abhishek Nigam</span>
        </h1>

        <h3 className="sub-text">
          A Passionate Full Stack Developer
        </h3>

        <p className="bio">
          I build scalable, secure and visually dynamic web applications using
          the MERN stack,TypeScript, Next.Js with GenAI & modern authentication systems like Keycloak.
        </p>

        <div className="actions">
          <a href="#projects" className="btn primary">
            View Projects <FaArrowRight />
          </a>

          <a
            href="/Abhishek_Nigam_Resume.pdf"
            className="btn secondary"
            download
          >
            Resume <FaFileDownload />
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://i.pinimg.com/originals/16/fe/7e/16fe7e7fb6eebb3087b6dc418748ee56.gif"
            alt="coding"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
