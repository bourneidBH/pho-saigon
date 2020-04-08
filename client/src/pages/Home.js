import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import ImageGrid from "../components/ImageGrid";
import Hours from "../components/Hours";

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
            <Container>
                <div className="inner">
                    <h2 className="centered">Welcome to Pho Saigon</h2>
                    <h3 className="centered h3-small">We are temporarily closed due to COVID-19. 
                    We look forward to serving you again soon.</h3>
                    <div className="row">
                        <div className="col-md-7">
                            <p>At Pho Saigon, we specialize in affordable, authentic Vietnamese cuisine made with the freshest ingredients. Whether you’re a fan of Vietnamese cuisine or looking to try it for the first time, our welcoming staff and great food will keep you coming back.</p>
                            <Hours />
                        </div>
                        <div className="col-md-5">
                            <img src="./images/dining.jpg" alt="Pho Saigon Restaurant" className="img-pad-top" />
                        </div>
                    </div>
                </div>
            </Container>
            <ImageGrid />
        </main>
    </div>
    )
};

export default Home;