import React from 'react';
import './skills.css'; // Asegúrate de que este archivo de estilos esté disponible

// Importación de iconos de react-icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaPython, FaGithub, FaDocker, FaCloud, FaCode, FaAtlassian } from 'react-icons/fa';

// Datos para las tecnologías
const technologies = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "Python", icon: <FaPython /> },
];

// Datos para las herramientas
const tools = [
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <FaGithub /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "Vercel", icon: <FaCloud /> },
  { name: "VScode", icon: <FaCode /> },
  { name: "Jira", icon: <FaAtlassian /> },
];

// Componente principal Skills
const Skills = () => {
  return (
    <section id="skills" className="main-container">
      {/* Contenedor para las technologies */}
      <div className="container">
        <h2 className="title">Technologies</h2>
        <ul className="tool-list">
          {technologies.map((tool, index) => (
            <li key={index} className="tool-item">
              <span className="tool-icon">{tool.icon}</span>
              {tool.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Contenedor para las tools */}
      <div className="container-tools">
        <h2 className="title">Tools</h2>
        <ul className="tool-list">
          {tools.map((tool, index) => (
            <li key={index} className="tool-item">
              <span className="tool-icon">{tool.icon}</span>
              {tool.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
