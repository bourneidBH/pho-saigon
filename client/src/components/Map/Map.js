import React from "react";
import "./Map.css";

function Map() {
    return (
        <div className="centered">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11668.688823078397!2d-88.05289583221843!3d43.01676237914829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880505717063165b%3A0x124d994803c019bb!2s10534%20W%20Greenfield%20Ave%2C%20West%20Allis%2C%20WI%2053214!5e0!3m2!1sen!2sus!4v1578484992890!5m2!1sen!2sus" title="Pho Saigon map" width="100%" height="500" frameBorder="0" style={{border:0, marginTop: "20px", paddingLeft: "20px", paddingRight: "20px"}} allowFullScreen="1"></iframe>
        </div>
    )
}

export default Map;