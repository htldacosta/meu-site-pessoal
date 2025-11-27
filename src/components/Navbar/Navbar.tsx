import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função auxiliar para verificar rota ativa
  const isActive = (path: string) =>
    location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">HitaluDev</Link>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className={isActive("/")} onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className={isActive("/about")} onClick={toggleMenu}>
          Sobre
        </Link>
        <Link
          to="/projects"
          className={isActive("/projects")}
          onClick={toggleMenu}
        >
          Projetos
        </Link>
        <Link
          to="/contact"
          className={isActive("/contact")}
          onClick={toggleMenu}
        >
          Contato
        </Link>
        <Link
          to="/newsletter"
          className={`newsletter-btn ${isActive("/newsletter")}`}
          onClick={toggleMenu}
        >
          Newsletter
        </Link>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
