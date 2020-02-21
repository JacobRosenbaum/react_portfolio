import React from "react";
import "../css/portfolio.css";
import Footer from "../../../Footer/js/Footer"
import Navbar from "../../../Navbar/js/Navbar"


function Portfolio() {
  return (
      <div>
          <Navbar />
    <div class="container">
    <div class="slideInDown">
        <div class="jumbotron">
            <h1 id="title" class="display-4">Portfolio</h1>
            <hr class="my-4" />

            <div class="row flexContainer">

                <div class="col-sm-6 col-m-4 col-12"> <img className= "portfolioimg" src={require("../../../assets/images/fieldcopy.png.jpg")} alt="Fantasy Football" />
                    <div class="label">Fantasy Football <span id="database">Database</span></div>
                    <div>
                        <a href="https://jacobrosenbaum.github.io/FantasyFootball/" target="_blank">
                            <i class="fas fa-wifi label1"></i>
                        </a>
                        <a href="https://github.com/JacobRosenbaum/FantasyFootball.github.io" target="_blank">
                            <i class="fab fa-github label1"></i>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-m-4 col-12">
                    <div id="box">
                        <i id="lock" class="fas fa-unlock-alt"></i>

                    </div>
                    <div class="label">Password Generator</div>
                    <div>
                        <a href="https://jacobrosenbaum.github.io/password_generator/password.html" target="_blank">
                            <i class="fas fa-wifi label1"></i>
                        </a>
                        <a href="https://github.com/JacobRosenbaum/JacobRosenbaum.github.io/tree/master/password_generator" target="_blank">
                            <i class="fab fa-github label1"></i>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-m-4 col-12"> <img  className= "portfolioimg" src={require("../../../assets/images/mountain.jpg")} alt="Weather Dashboard" />
                    <div class="label">Weather Dashboard</div>
                    <div>
                        <a href="https://jacobrosenbaum.github.io/weather_app/index.html" target="_blank">
                            <i class="fas fa-wifi label1"></i>
                        </a>
                        <a href="https://github.com/JacobRosenbaum/JacobRosenbaum.github.io/tree/master/weather_app" target="_blank">
                            <i class="fab fa-github label1"></i>
                        </a>
                    </div>
                </div>

                <div class="col-sm-6 col-m-4 col-12"> <img  className= "portfolioimg" src={require("../../../assets/images/books.png")} alt="Tutoring Database" />
                    <div class="label">Tutoring Database</div>
                    <div>
                        <a href="https://mantisshrimp.herokuapp.com/" target="blank">
                            <i class="fas fa-wifi label1"></i>
                        </a>
                        <a href="https://github.com/BenHonken/mantis-shrimp" target="_blank">
                            <i class="fab fa-github label1"></i>
                        </a>
                    </div>
                </div>
                <div class= "col-sm-6 col-m-4 col-12">
                    <img className= "portfolioimg" src={require("../../../assets/images/employee_directory.png")} alt="Employee Directory" />
                    <div class="label">Employee Directory</div>
                    <div>
                        <a href="http://undesirable-bite.surge.sh/" target="blank">
                            <i class="fas fa-wifi label1"></i>
                        </a>
                        <a href="https://github.com/JacobRosenbaum/employee_directory" target="_blank">
                            <i class="fab fa-github label1"></i>
                        </a>
                    </div>
                </div>
                <div class= "col-sm-6 col-m-4 col-12">
                    <img className= "portfolioimg" src={require("../../../assets/images/burger2.png")} alt="Burger" />
                    <div class="label">Eat-da-Burger</div>
                    <div>
                        <a href="https://burger-app-11.herokuapp.com/" target="blank">
                            <i class="fas fa-wifi label1"></i>
                        </a>
                        <a href="https://github.com/JacobRosenbaum/burger" target="_blank">
                            <i class="fab fa-github label1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />
    </div>
  );
}

export default Portfolio;
