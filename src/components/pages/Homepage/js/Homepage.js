import React from "react";
import "../css/homepage.css"

function Homepage() {
  return (
    <div id="container">
    <div>
        <h1 id="name">
            Jacob Rosenbaum
        </h1>
    </div>
    <div class="pulse">
        <div id="info"></div>
        <div class="row">
            <div class="col-sm-4">
                <h2 class="responsive">
                    <a href="views/aboutme.html" style={{color:"black"}}>About Me</a>
                </h2>
            </div>
            <div class="col-sm-4">
                <h2 className="responsive">
                    <a href="views/portfolio.html" style={{color:"black"}}>Portfolio </a>
                </h2>
            </div>
            <div class="col-sm-4">
                <h2 className="responsive">
                    <a href="views/info.html" style={{color:"black"}}> Contact</a>
                </h2>
            </div>
        </div>
        <div id="symbols" class="row">
            <div className="col-sm-6">
                <h1 class="responsive">
                    <a href="https://github.com/JacobRosenbaum " target="blank" style={{color:"black"}}><i id="github"className="fab fa-github "></i>

                </a>
                </h1>
            </div>
            <div class="col-sm-6">
                <h1 class="responsive">
                    <a href="https://www.linkedin.com/in/jacobrosenbaum/ " target="blank" style={{color:"black"}}><i id="linked" className="fab fa-linkedin "></i>

                </a>
                </h1>
            </div>
        </div>
    </div>
</div>
  );
}

export default Homepage;
