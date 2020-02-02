import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";

function Home() {
    return (
    <div>
        <Header />
        <main>
            <Container fluid>
                <Jumbotron
                    h1="Vietnamese Restaurant"
                    lead="Authentic Vietnamese and Chinese cuisine in West Allis"
                />
            </Container>
        </main>
    </div>
    )
};

export default Home;