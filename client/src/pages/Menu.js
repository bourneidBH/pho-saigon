import React from "react";
import MenuSection from "../components/MenuSection";
import Header from "../components/Header";

function Menu() {
    return (
    <div>
        <Header 
            h1="Menu"
            lead="Authentic Vietnamese and Chinese cuisine in West Allis"
        />
        <main>
            <MenuSection />
        </main>
    </div>
    )
};

export default Menu;