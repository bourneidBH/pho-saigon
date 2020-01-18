import React from "react";
import "./Button.css";

function Button(props) {
    const {
        onClick,
        buttonText,
        menuItemId
    } = props
    
    return (
        <button className="btn btn-success" onClick={onClick} data-id={menuItemId}>{buttonText}</button>
    )
};

export default Button;