import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Tanay Naik's Portfolio
      </Link>

      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <div class="dropdown">
            <NavLink to="/projects">Projects</NavLink>
            <div class="dropdown-content">
              <NavLink to="/Real%20Time%20Carbon%20Emissions%20Visualizer">
                Real Time Carbon Emissions Visualizer
              </NavLink>
              <NavLink to="/Cerebro">Cerebro</NavLink>
              <NavLink to="/FaceLogger">FaceLogger</NavLink>
              <NavLink to="/LLTrainer">LLTrainer</NavLink>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
