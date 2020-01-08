import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Hours from "../components/Hours";

function FindUs() {
    return (
        <div>
            <Header
                h1="Find Us"
                lead="Authentic Vietnamese and Chinese cuisine in West Allis" 
            />
            <main>
                <Hours />
                <Map />
            </main>
        </div>
    )
};

export default FindUs;
