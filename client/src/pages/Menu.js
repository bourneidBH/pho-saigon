import React from "react";
import MenuSection from "../components/MenuSection";
import Jumbotron from "../components/Jumbotron";

function Menu() {
    return <div>
        <Jumbotron 
            h1="Menu"
            lead="Authentic Vietnamese and Chinese cuisine in West Allis"
        />
        <MenuSection />
    </div>
};

export default Menu;