import React from "react";
import Image from "./PhoSaigon_logo_web.svg";
import "./Logo.css";

function Logo() {
    return <div className="logo-box">
        <a href="/"><img src={Image} alt="Pho Saigon" className="logo" /></a>
    </div>
};

export default Logo;