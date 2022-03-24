import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{justifyContent: "flex-end"}}>
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/menu">Menu</a>
                        <a className="nav-item nav-link" href="/location">Find Us</a>
                        <a className="nav-item nav-link" href="/about">About</a>
                        {/* <a className="nav-item nav-link" href="/contact">Contact</a> */}
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;