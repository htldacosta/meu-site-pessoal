import React, { useState, useEffect } from "react";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import "./Projects.css";

// Interface para tipar o objeto de projeto
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  repo: string;
  testLink?: string; // Opcional
}

const projectData: Project[] = [
  // ... Seus dados aqui (Adicionei 9 como exemplo)
  {
    id: 1,
    title: "1# Serviço de E-mail",
    description: "API REST com Spring Boot...",
    tags: ["Java", "Spring"],
    repo: "#",
    testLink: "/contato",
  },
  {
    id: 2,
    title: "2# Newsletter",
    description: "Sistema de subscrição...",
    tags: ["React", "Node"],
    repo: "#",
    testLink: "/newsletter",
  },
  {
    id: 3,
    title: "3# Cadastro Alunos",
    description: "CRUD completo...",
    tags: ["Java"],
    repo: "#",
  },
  {
    id: 4,
    title: "4# E-commerce",
    description: "Loja virtual completa...",
    tags: ["React", "Stripe"],
    repo: "#",
  },
  {
    id: 5,
    title: "5# Chat App",
    description: "Chat em tempo real...",
    tags: ["Socket.io"],
    repo: "#",
  },
  {
    id: 6,
    title: "6# Investimentos",
    description: "Simulador financeiro...",
    tags: ["Vue", "Go"],
    repo: "#",
  },
  {
    id: 7,
    title: "7# Task Manager",
    description: "Gerenciador de tarefas...",
    tags: ["Angular"],
    repo: "#",
  },
  {
    id: 8,
    title: "8# Weather App",
    description: "Previsão do tempo...",
    tags: ["JS", "API"],
    repo: "#",
  },
  {
    id: 9,
    title: "9# Blog Pessoal",
    description: "Blog com CMS...",
    tags: ["Next.js"],
    repo: "#",
  },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar mobile para ativar carrossel
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projectData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
  };

  // Componente auxiliar do Card para evitar repetição
  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.repo} className="project-btn-repo">
          Repo
        </a>
        {project.testLink && (
          <a href={project.testLink} className="project-btn-test">
            Testar
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1 className="section-title">Meus Projetos</h1>

      {isMobile ? (
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="carousel-content">
            <AnimatedSection key={projectData[currentIndex].id}>
              <ProjectCard project={projectData[currentIndex]} />
            </AnimatedSection>
            <div className="carousel-indicators">
              {currentIndex + 1} / {projectData.length}
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      ) : (
        <div className="projects-grid">
          {projectData.map((project) => (
            <AnimatedSection key={project.id}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
