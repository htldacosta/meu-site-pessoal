// Tipos para componentes que aceitam 'children' (filhos)
import { ReactNode } from "react";

export interface BaseProps {
  children?: ReactNode;
  className?: string;
}

// Se tiver dados de formulário compartilhados
export interface FormData {
  name: string;
  email: string;
  message?: string;
}
