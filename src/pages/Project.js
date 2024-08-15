import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="project-page">
      <img src={props.img} alt="project"></img>

      <a className="repo-link" href={props.link}>
        Project Link
      </a>

      <h2>About the Project</h2>
      <p>{props.description}</p>
      <h2>Motivation</h2>
      <p>{props.motivation}</p>
      <h2>Technologies Used</h2>
      <p>{props.technologies}</p>
    </div>
  );
}

export default Project;
