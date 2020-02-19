import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/pages/About/js/About.js";
import Contact from "./components/pages/Contact/js/Contact";



function App() {
  return (
    <div>
    <About />
    <Contact />
    </div>
  );
}

export default App;
