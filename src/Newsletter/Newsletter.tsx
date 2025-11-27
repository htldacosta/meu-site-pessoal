import React, { useState, FormEvent } from "react";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
import "./Newsletter.css";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Obrigado por assinar nossa newsletter com o e-mail: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="container newsletter-page">
      <AnimatedSection>
        <div className="newsletter-card">
          <h2>Assine nossa Newsletter</h2>
          <p>
            Receba novidades sobre desenvolvimento, tecnologia e meus projetos
            pessoais.
          </p>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Inscrever-se</button>
          </form>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Newsletter;
