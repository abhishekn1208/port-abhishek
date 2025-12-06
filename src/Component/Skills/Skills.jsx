import React from "react";
import "./skills.css";

const skills = [
  { name: "HTML", img: "https://cdn.iconscout.com/icon/free/png-512/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256" },
  { name: "CSS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "JavaScript", img: "https://img.icons8.com/?size=256&id=108784&format=png" },
  { name: "TypeScript", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "React.js", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next.js", img: "https://img.icons8.com/?size=256&id=yUdJlcKanVbh&format=png" },
  { name: "Node.js", img: "https://nodejs.org/static/logos/nodejsDark.svg" },
  { name: "Express.js", img: "https://img.icons8.com/?size=256&id=kg46nzoJrmTR&format=png" },
  { name: "MongoDB", img: "https://www.svgrepo.com/show/331488/mongodb.svg" },
  { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Redux", img: "https://img.icons8.com/?size=256&id=jD-fJzVguBmw&format=png" },
  { name: "Git", img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
  { name: "GitHub", img: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" }
];

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-title">
        Technical <span>Skills</span>
      </h1>

      <div className="skillset">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.img} alt={`${skill.name}-logo`} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
