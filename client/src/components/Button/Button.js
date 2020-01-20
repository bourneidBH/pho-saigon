import React from "react";
import "./Button.css";

function Button(props) {
    const {
        buttonText,
        menuItemId,
        callback,
        itemName,
        } = props
    
    return (
            <button className="btn btn-outline-secondary btn-sm" onClick={() => callback(menuItemId, itemName)}>{buttonText}</button>
        )
    
};

export default Button;