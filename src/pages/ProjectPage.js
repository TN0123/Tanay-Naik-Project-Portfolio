import React from "react";
import { Link } from "react-router-dom";
import "./ProjectPage.css";

function ProjectPage() {
  const projects = [
    {
      name: "Schematic",
      image: "/images/schematic.png",
      path: "/schematic",
    },
    {
      name: "DataVision",
      image: "/images/datavision.png",
      path: "/datavision",
    },
    {
      name: "StockDigestAI",
      image: "/images/StockDigestAI.png",
      path: "/stockdigestai",
    },
    {
      name: "Carbon Emissions Visualizer",
      image: "/images/carbon-emissions-project-img.png",
      path: "/carbon-emissions",
    },
    {
      name: "Cerebro",
      image: "/images/Cerebro Logo.jpg",
      path: "/cerebro",
    },
    {
      name: "FaceLogger",
      image: "/images/FaceLoggerDemo (1).gif",
      path: "/facelogger",
    },
    {
      name: "LLTrainer",
      image: "/images/LLTrainerDemo (1).gif",
      path: "/lltrainer",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Link to={project.path} className="project-card" key={index}>
            <div className="project-image-container">
              <img
                src={process.env.PUBLIC_URL + project.image}
                alt={project.name}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <h2 className="project-name">{project.name}</h2>
              <span className="view-project">View Project →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
