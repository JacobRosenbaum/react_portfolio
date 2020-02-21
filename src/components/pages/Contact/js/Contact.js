import React from "react";
import "../css/contact.css";

function Contact() {
  return (
    <div class="container">
    <div class="slideInLeft">
        <div class="jumbotron">
            <h1 class="display-4">Contact </h1>
            <hr class="my-4" />
            <div id="information">
                <div id="contactInfo">
                    <div id="email">
                    <i class="fas fa-envelope"></i> jacobrosenbaum95@gmail.com
                    </div>
                    <br />
                    <div >
                    <i class="fab fa-github "></i><a href="https://github.com/JacobRosenbaum " style= {{color:"#777777"}} target="blank"> Github</a>
                    </div>
                    <br />
                    <div id="linkedIn">
                    <i class="fab fa-linkedin "></i> <a href="https://www.linkedin.com/in/jacobrosenbaum/ " style= {{color:"#777777"}} target="blank" > LinkedIn</a>
                    </div>
                    <br />
                    <div id="resume">
                    <i class="fas fa-graduation-cap "></i> <a href="https://docs.google.com/document/d/1dU1evbdeRogSlUbvjAox5Ar5ZIFT-qYs0a5nwY5wMMs/edit?usp=sharing" style= {{color:"#777777"}} target="blank" > Resume</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
     
  );
}

export default Contact;
