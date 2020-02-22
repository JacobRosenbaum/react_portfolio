import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import NavBar from 'react-bootstrap/Navbar'

function Navbar() {
    return (
<div className="slideInDown">
    <NavBar collapseOnSelect expand="lg" bg="light" variant="light">
        <Link className="navbar-brand" id = "jacob" to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Jacob Rosenbaum
        </Link> 
        <NavBar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  />
            <NavBar.Collapse className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        About Me
                        </Link>            
                    </li>
                    <li className="nav-item">
                         <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                        </Link>  
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                        </Link> 
                    </li>
                </ul>
        </NavBar.Collapse>
    </NavBar>
</div>
 );
}

export default Navbar;