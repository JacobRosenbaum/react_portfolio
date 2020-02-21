import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio/js/Portfolio";
import About from "./components/pages/About/js/About.js";
import Contact from "./components/pages/Contact/js/Contact";
import Homepage from "./components/pages/Homepage/js/Homepage.js";

function App() {
  return (
    <div>
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  
    </div>
  );
}

export default App;
