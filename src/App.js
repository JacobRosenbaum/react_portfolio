import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Slimy from "./components/pages/Slimy";
function App() {
  return (
    <Router>
      
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/slimy" component={Slimy} />
        <Route path="/blog/:name" component={Blog} />
        <Route path="/contact" component={Contact} />
      
    </Router>
  );
}

export default App;