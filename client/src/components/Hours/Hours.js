import React from "react";
import "./Hours.css";
import Container from "../Container";

function Hours() {
    return (
        <Container>
            <h2 className="centered">Hours</h2>
            <p className="centered">
                Open 7 days a week 10am - 10pm.
            </p>
            <h2 className="centered">Location</h2>
            <p className="centered">
                10534 W Greenfield Ave, West Allis, WI 53124
            </p>
            <p className="phone centered">
                <a href="tel:4148289698">414-828-9698</a>
            </p>
        </Container>
    )
}

export default Hours;