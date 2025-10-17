import React from "react";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import "./Projects.css";

const projectData = [
  {
    id: 1,
    title: "1# Serviço de E-mail",
    description:
      "API REST para envio de e-mails usando Spring Boot, com validação e segurança via API Key.",
    tags: ["PostgreSQL", "Spring", "Java"],
    repo: "#",
    testLink: "#",
  },
  {
    id: 2,
    title: "2# Newsletter",
    description:
      "Sistema de subscrição e envio de newsletters para usuários cadastrados.",
    tags: ["React.js", "Node.js"],
    repo: "#",
    testLink: "#",
  },
  {
    id: 3,
    title: "3# Projeto cadastro de alunos",
    description:
      "CRUD completo para gerenciamento de alunos em uma instituição de ensino.",
    tags: ["Java", "Spring Boot"],
    repo: "#",
  },
  {
    id: 4,
    title: "4# Projeto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    tags: ["PostgreSQL", "Spring"],
    repo: "#",
  },
  {
    id: 5,
    title: "5# Projeto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    tags: ["Java", "Golang"],
    repo: "#",
  },
  {
    id: 6,
    title: "6# Simulador de investimentos",
    description:
      "Ferramenta que simula o rendimento de investimentos com base em taxas e períodos definidos pelo usuário.",
    tags: ["PostgreSQL", "Spring Boot", "React.js"],
    repo: "#",
  },
];

const Projects = () => {
  return (
    <div className="container">
      <h1 className="section-title">Meus Projetos</h1>
      <div className="projects-grid">
        {projectData.map((project) => (
          <AnimatedSection key={project.id}>
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
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn-repo"
                >
                  Repositório
                </a>
                {project.testLink && (
                  <a
                    href={project.testLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-test"
                  >
                    Testar
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Projects;
