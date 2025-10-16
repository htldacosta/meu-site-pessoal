import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
