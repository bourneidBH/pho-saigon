import React from "react";
import Container from "../Container";
import "./About.css";

function About() {
  return(
    <Container>
      <div className="inner">
        <div className="centered">
          <h2>Welcome to Pho Saigon</h2> 
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <p>At Pho Saigon, we specialize in affordable, authentic Vietnamese cuisine. Our fresh ingredients and made to order pho have made it a neighborhood hit. The West Allis location has been open since March 2019.</p>
            <p>With over 40 years of experience in the restaurant business, Chef Thanh Nguyen combines family recipes passed down from father to son with classical training from a well-known chef in New York to bring the flavors of Vietnam to West Allis. Whether you’re a fan of Vietnamese cuisine or looking to try it for the first time, the welcoming staff and great food will keep you coming back to Pho Saigon.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3 className="subhead">What people are saying:</h3> 
            <blockquote>“Don't let this place fool you. Yes, it's clean. Yes, it's authentic. It's not every day you hear these words put together to describe a local pho spot, but this place is it. I've been here a few times and the service has always been good. The employees treat you well.” – Peter H.</blockquote>
            <blockquote>“Love, love, love the special Bahn Mi!!!! Stopped in to get a 6 inch sandwich with some egg rolls. It's absolutely delicious!!! The bread on the sandwich is perfect. It bread comes out warm but has great crunch. The meats are superb. Everything about this sandwich is divine.”  - Sarah I.</blockquote>
            <p>Check us out on <a href="https://www.yelp.com/biz/pho-saigon-west-allis" target="_blank" rel="noopener noreferrer">Yelp.com</a> for more reviews.</p>
          </div>
          <div className="col-md-6">
            <img src="./images/counter.jpg" alt="Pho Saigon" className="img-pad-top" />
          </div>
        </div>
      </div>
    </Container>
  )
};

export default About;