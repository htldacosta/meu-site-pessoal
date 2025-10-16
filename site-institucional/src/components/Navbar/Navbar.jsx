import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink
          to="/"
          className="navbar-logo"
          onClick={() => setMenuOpen(false)}
        >
          HitaluDev
        </NavLink>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={() => setMenuOpen(false)}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " active" : "")
                }
              >
                Início
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projetos"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " active" : "")
                }
              >
                Projetos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " active" : "")
                }
              >
                Sobre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " active" : "")
                }
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
