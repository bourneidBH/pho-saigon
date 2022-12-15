import React from "react";
import "./OrderButton.css";

const OrderButton = (props) => {
    const { item, callback, buttonText } = props

    const handleClick = () => {
        const selectedItem = {
            ...item,
            options: [],
            quantity: 1,
        }
        callback(selectedItem)
    }

    return (
        <button className="btn btn-outline-secondary btn-sm" onClick={handleClick}>{buttonText}</button>
    )
}

export default OrderButton;