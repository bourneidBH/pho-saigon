import React from "react";
import Header from "../components/Header"

function NoMatch() {
    return (
    <div>
        <Header 
        h1="Sorry, page not found"
        />
        <main>
            <p>Go <a href="/">home</a> to try again.</p>
        </main>
    </div>
    )
};

export default NoMatch;