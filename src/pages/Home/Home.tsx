import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <AnimatedSection>
        <header className="hero-section">
          <h1 className="hero-title">
            Olá, eu sou <span className="highlight">Hitalu</span>
          </h1>
          <p className="hero-subtitle">
            Engenheiro de Software & Desenvolvedor Fullstack
          </p>
          <p className="hero-description">
            Especialista em Java, Spring Boot e React. Transformo ideias em
            código performático.
          </p>
          <Link to="/projects" className="cta-button">
            Ver Meus Projetos
          </Link>
        </header>
      </AnimatedSection>
    </div>
  );
};

export default Home;
