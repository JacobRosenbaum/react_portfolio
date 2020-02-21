import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
<div class="slideInDown">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <Link id = "jacob" to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Jacob Rosenbaum
        </Link> 
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        About Me
                        </Link>            
                    </li>
                    <li class="nav-item">
                         <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                        </Link>  
                    </li>
                    <li class="nav-item active">
                        <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                        </Link> 
                    </li>
                </ul>
        </div>
    </nav>
</div>
 );
}

export default Navbar;