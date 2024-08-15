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
          <NavLink to="/Tanay-Naik-Project-Portfolio/">About</NavLink>
        </li>
        <li>
          <div class="dropdown">
            <NavLink to="Tanay-Naik-Project-Portfolio/projects">
              Projects
            </NavLink>
            <div class="dropdown-content">
              <NavLink to="/Real%20Time%20Carbon%20Emissions%20Visualizer">
                Real Time Carbon Emissions Visualizer
              </NavLink>
              <NavLink to="Tanay-Naik-Project-Portfolio/Cerebro">
                Cerebro
              </NavLink>
              <NavLink to="Tanay-Naik-Project-Portfolio/FaceLogger">
                FaceLogger
              </NavLink>
              <NavLink to="Tanay-Naik-Project-Portfolio/LLTrainer">
                LLTrainer
              </NavLink>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="Tanay-Naik-Project-Portfolio/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
