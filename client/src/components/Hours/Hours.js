import React from "react";
import "./Hours.css";
// import Container from "../Container";

function Hours() {
    return (
        <div>
            <h2 className="centered">Hours</h2>
            <p className="centered">
                <strong>Open 7 days a week.</strong> <br />
                Sunday - Thursday 10am - 9pm. <br />
                Friday and Saturday 10am - 10pm.
            </p>

            <h2 className="centered">Location</h2>
            <p className="centered">
                10534 W Greenfield Ave, West Allis, WI 53124<br />
                <span className="phone"><a href="tel:4148289698">414-828-9698</a></span>
            </p>
        </div>
    )
}

export default Hours;