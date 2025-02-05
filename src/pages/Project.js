import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="project-page">
      <div className="project-content">
        <h1 className="project-title">{props.title}</h1>

        <div className="project-image-container">
          <img src={props.img} alt="project" className="project-image" />
        </div>

        <a
          className="repo-link"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>

        <div className="project-section">
          <h2>About the Project</h2>
          <p>{props.description}</p>
        </div>

        <div className="project-section">
          <h2>Motivation</h2>
          <p>{props.motivation}</p>
        </div>

        <div className="project-section">
          <h2>Technologies Used</h2>
          <p>{props.technologies}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
