import React from "react";
import Carousel from "../components/Carousel";
import "./ProjectPage.css";

function ProjectPage() {
  const images = [
    "./images/StockDigestAI.png",
    "./images/carbon-emissions-project-img.png",
    "./images/Cerebro Logo.jpg",
    "./images/FaceLoggerDemo (1).gif",
    "./images/LLTrainerDemo (1).gif",
  ];

  const names = [
    "StockDigestAI",
    "Real Time Carbon Emissions Visualizer",
    "Cerebro",
    "FaceLogger",
    "LLTrainer",
  ];

  return (
    <div className="carousel">
      <Carousel images={images} names={names} />
      <p className="carousel-caption">Click on a Project Link!</p>
    </div>
  );
}

export default ProjectPage;
