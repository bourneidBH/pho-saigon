import React from "react";
import Jumbotron from "../components/Jumbotron"

function NoMatch() {
    return <div>
        <Jumbotron 
        h1="Sorry, page not found"
        />
        <p>Go <a href="/">home</a> to try again.</p>
    </div>
};

export default NoMatch;