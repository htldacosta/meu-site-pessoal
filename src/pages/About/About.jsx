import React from "react";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h1 className="section-title">Sobre Mim</h1>

      <AnimatedSection>
        <div className="about-content">
          <h2>1# Meu Começo...</h2>
          <p>
            Minha jornada no mundo da programação começou em 2017, motivada pela
            curiosidade e pelo desejo de construir um App e publicar na Play
            Store. Foi através de um curso online de Java, do canal Curso em
            Vídeo, que dei meus primeiros passos na lógica e na sintaxe de
            programação. Essa paixão inicial foi um marco, mas minha evolução
            foi interrompida em 2019 por conta de problemas de saúde, uma pausa
            necessária que me fez adiar temporariamente meus planos. O tempo
            longe do código me mostrou a...
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="about-content">
          <h2>2# Carreira Freelancer</h2>
          <p>
            O ano de 2022 marcou um ponto de virada: iniciei minha carreira como
            desenvolvedor freelancer. Nos dois anos seguintes, mergulhei no
            universo do desenvolvimento front-end, criando interfaces web com
            React.js e entregando projetos personalizados para alguns clientes.
            Foi uma fase de intenso aprendizado prático, onde pude aplicar e
            aprimorar meus conhecimentos, transformando ideias em soluções
            funcionais. Ao final de 2023, percebi a necessidade de me aprofundar
            no desenvolvimento back-end para construir aplicações mais robustas
            e completas. Iniciei meu aprendizado em Node.js e Express.js, mas
            logo redirecionei meu foco para Java e Spring Boot, a escolha ideal
            para sistemas grandes e de alta performance.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="about-content">
          <h2>3# Foco Atual</h2>
          <p>
            Atualmente, meu foco é consolidar minha expertise como desenvolvedor
            back-end, especializando-me em Java com Spring Boot para criar APIs
            escaláveis e seguras. Continuo aprimorando minhas habilidades em
            arquitetura de sistemas e boas práticas de desenvolvimento, buscando
            sempre os desafios que me permitam crescer profissionalmente e
            entregar software de alta qualidade.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
