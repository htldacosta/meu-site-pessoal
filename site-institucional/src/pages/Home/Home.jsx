import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// -------------------- ÁREA DE EDIÇÃO DOS ÍCONES --------------------
// Para editar, adicionar ou remover ícones, modifique a lista abaixo.
// Vá em https://devicon.dev/, encontre o ícone que deseja,
// clique nele e copie o "SVG link for use in <img> tags".
// Cole o link aqui.

const skills = [
  {
    name: "React",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Java",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
  },
  {
    name: "Spring",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  },
  {
    name: "Amazon AWS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-line-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg",
  },
  {
    name: "MongoDB",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "Node.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
  },
  {
    name: "Go",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Docker",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
  },
  {
    name: "Kubernetes",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  },
];
// -------------------- FIM DA ÁREA DE EDIÇÃO --------------------

const Home = () => {
  return (
    <>
      {/* 1. Seção de Apresentação (Hero) */}
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Desenvolvedor de Software backend</h1>
          <p className="hero-subtitle">Desenvolvedor de Software java spring</p>
          <Link to="/projetos" className="hero-button">
            Ver Portfólio
          </Link>
        </div>
        <div className="hero-image-container">
          <img
            src="/profile-pic.jpg"
            alt="Hitalu da Costa"
            className="hero-image"
          />
        </div>
      </div>

      <div className="container">
        {/* 2. Seção de Projetos */}
        <section className="home-projects-section">
          <h2 className="section-title">Projetos</h2>
          <div className="home-projects-preview">
            <div className="project-preview-card">
              <h3>Projeto 1</h3>
            </div>
            <div className="project-preview-card">
              <h3>Projeto 2</h3>
            </div>
            <div className="project-preview-card">
              <h3>Projeto 3</h3>
            </div>
          </div>
          <Link to="/projetos" className="home-projects-button">
            Ver Todos os Projetos
          </Link>
        </section>

        {/* 3. Seção de Competências com Carrossel */}
        <section className="skills-section">
          <h2 className="section-title">Competências</h2>
          <div className="skills-carousel">
            <div className="skills-track">
              {[...skills, ...skills].map((skill, index) => (
                <div className="skill-slide" key={index} title={skill.name}>
                  <img
                    src={skill.iconUrl}
                    alt={skill.name}
                    className="skill-icon"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Seção Sobre Mim */}
        <section className="home-about-section">
          <div className="home-about-card">
            <h2>Sobre mim</h2>
            <p>
              Um profissional em busca de soluções robustas na engenharia de
              sistemas.
            </p>
            <Link to="/sobre" className="home-about-button">
              Ver perfil
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
