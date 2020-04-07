import React from "react";
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import About from "../components/About";

function AboutUs() {
  return(
    <div>
      <Header />
      <main>
        <Container fluid>
          <Jumbotron 
            h1="About Us"
            lead="Authentic Vietnamese and Chinese cuisine in West Allis"
          />
        </Container>
        <About />
      </main>
    </div>
  )
};

export default AboutUs;