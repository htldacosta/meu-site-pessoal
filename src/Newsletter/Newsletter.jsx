import React, { useState, useEffect } from "react";
import "./Newsletter.css"; // Criaremos este arquivo CSS a seguir

const Newsletter = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Para desabilitar botão

  // Regex para validação de email simples
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Função de validação
  const validateField = (name, value) => {
    let errorMsg = "";
    if (name === "name") {
      // Validação só mostra erro se o campo foi tocado e está inválido,
      // ou se está vazio após ter sido tocado
      if (value && value.length < 3) {
        errorMsg = "O nome deve ter no mínimo 3 caracteres.";
      } else if (value.length > 40) {
        errorMsg = "O nome deve ter no máximo 40 caracteres.";
      }
    }
    if (name === "email") {
      if (value && !emailRegex.test(value)) {
        errorMsg = "Por favor, insira um email válido.";
      }
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validação em tempo real APÓS o usuário parar de digitar (ou ao sair do campo)
    // Para validação realmente *enquanto* digita, a lógica seria um pouco diferente
    // Mas validar no 'blur' (ao sair do campo) ou com um pequeno delay é mais comum
    // Aqui, faremos a validação a cada mudança para simplicidade
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));

    if (status) setStatus(""); // Limpa status se voltar a digitar
    setIsSubmitting(false); // Permite tentar enviar de novo
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Desabilita botão temporariamente

    // Força a validação de todos os campos ao tentar enviar
    const nameError =
      validateField("name", formData.name) ||
      (formData.name ? "" : "O nome é obrigatório.");
    const emailError =
      validateField("email", formData.email) ||
      (formData.email ? "" : "O email é obrigatório.");

    const currentErrors = { name: nameError, email: emailError };
    setErrors(currentErrors);

    // Verifica se há algum erro
    const formIsValid = !Object.values(currentErrors).some(
      (error) => error !== ""
    );

    if (formIsValid) {
      // Exibe a mensagem de aviso
      setStatus("Projeto em desenvolvimento.");
      // Poderia limpar o form aqui se quisesse:
      // setFormData({ name: "", email: "" });
    } else {
      setStatus("Por favor, corrija os erros no formulário.");
      setIsSubmitting(false); // Reabilita o botão se houve erro
    }
  };

  return (
    <div className="container newsletter-page">
      <h1 className="section-title">Assine a Newsletter</h1>
      <div className="newsletter-wrapper">
        <p className="newsletter-description">
          Fique por dentro das novidades e atualizações dos meus projetos.
        </p>
        <form className="newsletter-form" noValidate onSubmit={handleSubmit}>
          {/* CAMPO NOME */}
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              maxLength={41} // Limite técnico +1
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

          <div className="form-buttons">
            <button
              type="submit"
              className="btn-send-newsletter"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
        {/* Exibe a mensagem de status (sucesso ou erro geral) */}
        {status && (
          <p
            className={`status-message ${
              errors.name || errors.email ? "error" : ""
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
