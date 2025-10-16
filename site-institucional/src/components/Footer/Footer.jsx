import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            G
          </a>
          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            in
          </a>
        </div>
        <p className="footer-text">
          Todos os direitos reservados © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
