import React from "react";
import "./Jumbotron.css";
import Background from "./pho.jpg";

function Jumbotron({ h1, lead }) {
    const style = { 
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }

    return <div className="jumbotron jumbotron-fluid" style={style}>
        <div className="container">
        <h1 className="display-4">{h1}</h1>
        <p className="lead">{lead}</p>
        </div>
    </div>
}

export default Jumbotron;