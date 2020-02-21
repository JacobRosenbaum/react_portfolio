import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio/js/Portfolio";
import About from "./components/pages/About/js/About.js";
import Contact from "./components/pages/Contact/js/Contact";
import Homepage from "./components/pages/Homepage/js/Homepage.js";



function App() {
  return (
    <div>
    <About />
    <Contact />
    <Homepage />
    <Portfolio />
    </div>
  );
}

export default App;
