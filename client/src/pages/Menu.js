import React from "react";
import MenuSection from "../components/MenuSection";
import Container from "../components/Container";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";

function Menu() {
    return (
    <div>
        <Header />
        <main>
            <Container fluid>
                <Jumbotron
                    h1="Menu"
                    lead="Authentic Vietnamese and Chinese cuisine in West Allis"
                />
            </Container>
            <MenuSection />
        </main>
    </div>
    )
};

export default Menu;