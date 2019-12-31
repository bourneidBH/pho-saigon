import React from "react";
import "./MenuItem.css";

function MenuItem(props) {
    const { menuItemId, itemName, itemNameVietnamese, description, price, image } = props;
    return (
        <div className="row">
            <div className="col-md-2">
                <img src={image} alt={itemName} />
            </div>
            <div className="col-md-9">
                <h4>{menuItemId}. {itemName}</h4>
                <h5>{itemNameVietnamese}</h5>
                <p>{description}</p>
            </div>
            <div className="col-md-1">
                <p className="price">
                    ${price || "Market price"}
                </p>
            </div>
        </div>
    )
}

export default MenuItem;