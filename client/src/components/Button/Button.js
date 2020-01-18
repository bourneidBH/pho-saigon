import React from "react";
import "./Button.css";

function Button(props) {
    const {
        buttonText,
        menuItemId,
        callback
        } = props
    
    return (
            <button className="btn btn-outline-secondary btn-sm" onClick={() => callback(menuItemId)}>{buttonText}</button>
        )
    
};

export default Button;