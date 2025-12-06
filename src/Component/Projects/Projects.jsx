import React, { useState } from "react";
import "./project.css";
import dellImage from "./assest/dell.png";
import ols from "./assest/ols.png";
import pokemon from "./assest/pokemon.png";
import iwConsole from "../../assets/console.png";
import iwUms from "../../assets/ums.png";
import iwMis from "../../assets/mis.png";
import vyana from "../../assets/vyana.png";

const projects = [
    {
    title: "IW-Console – Website Manager",
    type: "company",
    img: iwConsole,
    demo: "https://console.impactweaver.com/",
    desc: "Enhanced web app for report generation, newsletter module & AD integration. Improved product performance & bug fixes.",
    stack: ["React", "Node.js", "MongoDB", "Keycloak", "Microservices"],
  },
  {
    title: "IW-UMS & IW-SSO Authentication Services",
    type: "company",
    img: iwUms,
    demo: "https://ums.impactweaver.com/",
    desc: "User/Entity registration, roles, JWT login with Keycloak SSO + fingerprint authentication.",
    stack: ["Node.js", "Express", "MongoDB", "Keycloak", "JWT"],
  },
  {
    title: "IW-MIS – NGO Management Information System",
    type: "company",
    img: iwMis,
    demo: "https://mis.impactweaver.com/",
    desc: "Full NGO MIS: project tracking, finance management, voucher generation & reports.",
    stack: ["React", "Node.js", "MongoDB", "Microservices"],
  },
  {
    title: "Vyaana -A Digital Menu for Moden Restaurant's -- ONLY FOR MOBILE SCREEN",
    type: "personal",
    img: vyana,
    demo: "https://bussiness-template-tau.vercel.app/",
    desc: "Digital Menu to improve the order system",
    stack: ["React", "TypeScript","Redux"],
  },
  {
    title: "Dell Technologies",
    type: "personal",
    img: dellImage,
    demo: "https://dell-computers.vercel.app/",
    github: "https://github.com/abhishekn1208/Dell-Frontend",
    desc: "A Dell Technologies clone with secure authentication, responsive UI and frontend-backend integration.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Express", "MongoDB"],
  },
  {
    title: "Online Lecture Scheduling App",
    type: "personal",
    img: ols,
    demo: "https://tourmaline-duckanoo-526e83.netlify.app/",
    github: "https://github.com/abhishekn1208/Online_Lecture_Scheduling_app",
    desc: "Lecture management app with admin-controlled scheduling, secure login and CRUD operations.",
    stack: ["HTML", "JavaScript", "React", "Express", "MongoDB", "TailwindCSS"],
  },
  {
    title: "Pokémon Application",
    type: "personal",
    img: pokemon,
    demo: "https://pokemon-fullstackdb.vercel.app/",
    github: "https://github.com/abhishekn1208/Pokemon_Frontend",
    desc: "Pokémon details, filtering, view modes & login-protected pages for data access.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Express", "MongoDB"],
  },
  
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggle = () =>
    setVisibleCount(visibleCount === 3 ? projects.length : 3);

  return (
    <section id="projects" className="project">
      <h1>
        My <span>Projects</span>
      </h1>

      <div id="projectBox">
        {projects.slice(0, visibleCount).map((proj, i) => (
          <div className="project-grid" key={i}>
            <div className="project-image">
              <img src={proj.img} alt={proj.title} />
            </div>

            <div className="desc-card">
              <div className="flex items-center gap-2">
                <h1>{proj.title}</h1>

                {proj.type === "company" ? (
                  <span className="px-2 py-1 text-xs bg-blue-500/20 text-white-400 rounded-md">
                    Company Project
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-md">
                    Personal Project
                  </span>
                )}
              </div>

              <p>{proj.desc}</p>

              <div className="tech-Stack flex flex-wrap gap-2 mt-2">
                {proj.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-900/50 text-cyan-300 px-3 py-1 rounded-lg text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="link-icons">
                {proj.demo && (
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                    🌐 Live
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💻 Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
    <div className="toggle-container">
  <button onClick={handleToggle} className="toggle-btn">
    {visibleCount === 3 ? "View More" : "View Less"}
  </button>
</div>
    </section>
  );
};

export default Projects;
