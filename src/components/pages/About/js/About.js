import React from "react";
import "../css/about.css";
import Footer from "../../../Footer/js/Footer"
import Navbar from "../../../Navbar/js/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />
    <div class="container">
      <div class="slideInRight">
        <div class="jumbotron">
            <h1 class="display-4">About Me</h1>
              <hr class="my-4" />
                <div class="row">
                    <div class="col-md-12">
                    <img src= {require("../../../assets/images/headshotJacob.jpg")} id="bio-image" alt="Head Shot" />
                      <p>
                        Hello! My name is Jacob Rosenbaum. Glad you navigated to my site. I'm currently enrolled at the University of Minnesota Coding Bootcamp.
                      </p>
                      <p>
                        I graduated from the U of M with a Business degree and found that coding is vastly more interesting. I plan to combine my business soft skills with my coding technical skills to lead long and succesful (and fun!) web development career!
                      </p>
                      <p>
                        Feel free to navigate to the "Portfolio" page to check out some of my applications. If you would like to contact me, go ahead and shoot me a message on the "Contact" page. Thanks again for visiting my site.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
export default About;
