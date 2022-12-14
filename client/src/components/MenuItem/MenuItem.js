import React from "react";
import "./MenuItem.css";
import OrderButton from "../OrderButton";

function MenuItem(props) {
    const { item, callback } = props;
    const { menuItemId, itemName, itemNameVietnamese, description, price, image } = item;
    
    return (
        <div className="row">
            <div className="col-md-10">
                { image ? 
                    <div className="img-box">
                        <img src={image} alt={itemName} />
                    </div> : null
                }
                <h4>{menuItemId}. {itemName}</h4>
                <h6>{itemNameVietnamese}</h6>
                <p>{description}</p>
            </div>
            <div className="col-md-2 align-end">
                <p className="price">
                    {price ? "$" + price : "Market price"}
                </p>
                <br /><br />
                <OrderButton
                    item={item}
                    buttonText="Add to preview"
                    callback={callback}
                />
                
            </div>
        </div>
    )
}

export default MenuItem;