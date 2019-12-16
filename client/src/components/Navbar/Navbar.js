import React from "react";
import Logo from "../Logo";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Menu</a>
                        <a className="nav-item nav-link menu-left" href="#">Find Us</a>
                        <a className="nav-item nav-link menu-right" href="#">About</a>
                        <a className="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
            </nav>
            <Logo />

        </div>

    )
}

export default Navbar;