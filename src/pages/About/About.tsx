import React from "react";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import "./About.css";
// Importe a imagem se estiver dentro de src/assets ou use caminho público
import profilePic from "../../assets/minha-foto.jpg";

const About: React.FC = () => {
  return (
    <div className="container">
      <AnimatedSection>
        <h1 className="section-title">Sobre Mim</h1>
        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Hitalu da Costa" />
          </div>
          <div className="about-text">
            <p>
              Sou um apaixonado por tecnologia e música. Atualmente focado em
              arquitetura de software escalável e desenvolvimento ágil. Quando
              não estou codando, estou tocando guitarra ou planejando minha
              próxima viagem.
            </p>
            <div className="skills-grid">
              {/* Exemplo de renderização dinâmica de skills */}
              {[
                "Java",
                "Spring Boot",
                "React",
                "PostgreSQL",
                "Docker",
                "TypeScript",
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
