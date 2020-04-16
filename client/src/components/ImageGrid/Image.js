import React from "react";

function Image(props) {

    const { id, image, name } = props;

    return (
        <div id={id} data-id={id}>
            <img src={image} alt={name} max-width="100%" />
        </div>
    );
}

export default Image;
