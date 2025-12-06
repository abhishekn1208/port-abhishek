import React from "react";
import "./experience.css";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    role: "Full Stack Developer (MERN)",
    company: "Impact Weaver",
    location: "Guwahati, Assam",
    period: "Apr 2025 – Present",
    points: [
      "Reduced manual NGO reporting effort by 30% by optimizing CSR workflow automation.",
      "Built REST APIs and improved MongoDB aggregation performance.",
      "Developed CSR-facing client management portal to enhance operations.",
    ],
  },
  {
    role: "Full Stack Developer (MERN) – Trainee",
    company: "Masai School (Prepleaf)",
    location: "Remote",
    period: "Feb 2024 – Mar 2025",
    points: [
      "Completed 12-month industry-grade MERN Stack training.",
      "Built full-stack applications following scalable software practices.",
    ],
  },
  {
    role: "Talent Acquisition Specialist",
    company: "Tanisha Systems",
    location: "Noida, UP",
    period: "Feb 2022 – Nov 2024",
    points: [
      "Collaborated with engineering teams to understand hiring needs.",
      "Placed multiple candidates in US staffing roles strengthening recruitment operations.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h1 className="title">
        Professional <span>Experience</span>
      </h1>

      <div className="experience-container">
        {experiences.map((exp, i) => (
          <div className="experience-card" key={i}>
            <h2 className="role">{exp.role}</h2>

            <div className="experience-meta">
              <span><FaBuilding className="icon" /> {exp.company}</span>
              <span><FaMapMarkerAlt className="icon" /> {exp.location}</span>
              <span><FaCalendarAlt className="icon" /> {exp.period}</span>
            </div>

            <ul className="exp-list">
              {exp.points.map((point, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="bullet-icon" /> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
