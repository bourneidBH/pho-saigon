import React from "react";
import Map from "../components/Map";
import Hours from "../components/Hours";
import Layout from "../components/Layout";

function FindUs() {
    return (
        <Layout
            h1="Find Us"
            lead="Authentic Vietnamese and Chinese cuisine in West Allis"
        >
            <Hours />
            <Map />
        </Layout>
    )
};

export default FindUs;
