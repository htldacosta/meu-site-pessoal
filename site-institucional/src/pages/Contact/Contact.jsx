import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    // MUDE A URL PARA A DO SEU BACKEND
    const API_URL = "http://localhost:8080/simple";
    // MUDE PARA A SUA API KEY REAL
    const API_KEY = "SUA_API_KEY_AQUI";

    try {
      await axios.post(API_URL, formData, {
        headers: { "X-API-Key": API_KEY },
      });
      setStatus("Email enviado com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setStatus("Falha ao enviar o email. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="container contact-page">
      <h1 className="section-title">Contato</h1>
      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn-send">
              Enviar Email
            </button>
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
