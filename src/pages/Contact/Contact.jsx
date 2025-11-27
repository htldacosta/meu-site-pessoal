import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Regex para validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Função de validação centralizada
  const validateField = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "name":
        if (value.length > 0 && value.length < 3) {
          errorMsg = "O nome deve ter no mínimo 3 caracteres.";
        } else if (value.length > 40) {
          errorMsg = "O nome deve ter no máximo 40 caracteres.";
        }
        break;
      case "email":
        if (value.length > 0 && !emailRegex.test(value)) {
          errorMsg = "Por favor, insira um email válido.";
        }
        break;
      case "subject":
        if (value.length > 50) {
          errorMsg = "O assunto deve ter no máximo 50 caracteres.";
        }
        break;
      case "message":
        if (value.length > 1000) {
          errorMsg = "A mensagem deve ter no máximo 800 caracteres.";
        }
        break;
      default:
        break;
    }
    return errorMsg;
  };

  // Efeito para checar a validade geral do formulário
  useEffect(() => {
    const nameValid = formData.name.length >= 3 && formData.name.length <= 40;
    const emailValid = emailRegex.test(formData.email);
    const subjectValid =
      formData.subject.length > 0 && formData.subject.length <= 50;
    const messageValid =
      formData.message.length > 0 && formData.message.length <= 800;

    setIsFormValid(nameValid && emailValid && subjectValid && messageValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Atualiza o formulário
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validação em tempo real
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));

    // Limpa o status se o usuário voltar a digitar
    if (status) setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Re-valida tudo ao tentar enviar
    const nameError =
      validateField("name", formData.name) ||
      (formData.name ? "" : "Campo obrigatório.");
    const emailError =
      validateField("email", formData.email) ||
      (formData.email ? "" : "Campo obrigatório.");
    const subjectError =
      validateField("subject", formData.subject) ||
      (formData.subject ? "" : "Campo obrigatório.");
    const messageError =
      validateField("message", formData.message) ||
      (formData.message ? "" : "Campo obrigatório.");

    const currentErrors = {
      name: nameError,
      email: emailError,
      subject: subjectError,
      message: messageError,
    };
    setErrors(currentErrors);

    // Verifica se há algum erro
    const formHasErrors = Object.values(currentErrors).some(
      (error) => error !== ""
    );

    if (formHasErrors) {
      setStatus("Por favor, corrija os erros no formulário.");
      return;
    }

    // Se isFormValid for true (calculado pelo useEffect)
    setStatus("Enviando...");

    const API_URL = "http://localhost:8080/simple";
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
          {/* CAMPO NOME */}
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              maxLength={41} // Previne digitação além do limite
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          {/* CAMPO EMAIL */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          {/* CAMPO ASSUNTO */}
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              value={formData.subject}
              onChange={handleChange}
              aria-invalid={!!errors.subject}
              maxLength={51}
            />
            <div className="char-counter">{formData.subject.length} / 50</div>
            {errors.subject && (
              <p className="error-message">{errors.subject}</p>
            )}
          </div>

          {/* CAMPO MENSAGEM */}
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              maxLength={1501}
            ></textarea>
            <div className="char-counter">{formData.message.length} / 800</div>
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </div>

          <div className="form-buttons">
            <button
              type="submit"
              className="btn-send"
              disabled={status === "Enviando..."}
            >
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
