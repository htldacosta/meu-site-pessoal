import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports dos componentes (certifique-se de que os caminhos batem)
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Newsletter from "./Newsletter/Newsletter";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
