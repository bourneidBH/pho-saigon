import React from "react";
import "./MenuItem.css";
import OrderButton from "../OrderButton";

function MenuItem(props) {
    const { menuItemId, itemName, itemNameVietnamese, description, price, image, callback, optionName, categoryName } = props;
    
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
                {/* <OrderButton
                menuItemId={menuItemId}
                itemName={itemName}
                optionName={optionName}
                categoryName={categoryName}
                price={price}
                buttonText="Add to order"
                callback={callback}
                /> */}
                
            </div>
        </div>
    )
}

export default MenuItem;