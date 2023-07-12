import React from "react";
import Layout from "../components/Layout";

function NoMatch() {
    return (
    <Layout
        h1="Sorry, page not found"
    >
        <p>Go <a href="/">home</a> to try again.</p>
    </Layout>
    )
};

export default NoMatch;