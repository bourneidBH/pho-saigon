import React from "react";
import "./Header.css";
import Navbar from "../Navbar";
import Logo from "../Logo";
import Jumbotron from "../Jumbotron";

function Header(props) {
    const { h1, lead } = props;

    return (
        <header>
            <div className="bg-white">
                <Logo />
                <div className="top-shift">
                    <Navbar />
                </div>
            </div>
            <Jumbotron 
                h1={h1}
                lead={lead}
            />
        </header>
    )
};

export default Header;