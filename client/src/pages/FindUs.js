import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map";
import Hours from "../components/Hours";

function FindUs() {
    return (
        <div>
            <Header />
            <main>
                <Container fluid>
                    <Jumbotron
                        h1="Find Us"
                        lead="Authentic Vietnamese and Chinese cuisine in West Allis"
                    />
                </Container>
                <Container>
                    <Hours />
                </Container>
                <Map />
            </main>
        </div>
    )
};

export default FindUs;
