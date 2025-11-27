import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Hitalu Da Costa. Todos os direitos
        reservados.
      </p>
      <div className="social-icons">
        {/* Adicione seus links reais aqui */}
        <a
          href="https://github.com/htldacosta"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/htldacosta"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
