import React from "react";
import About from "../components/About";
import Layout from "../components/Layout";

function AboutUs() {
  return(
    <Layout 
      h1="About Us"
      lead="Authentic Vietnamese and Chinese cuisine in West Allis"
    >
      <About />
    </Layout>
  )
};

export default AboutUs;