import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import CaseStudy1 from "./components/CaseStudy1"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.js"

function App() {
  return (
    <main className="app">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <CaseStudy1 /> */}
    </main>
  );
}

export default App;
