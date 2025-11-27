import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// A "exclamação" (!) no final diz ao TS que o elemento 'root' com certeza existe
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
