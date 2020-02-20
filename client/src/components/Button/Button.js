import React from "react";
import "./Button.css";

class Button extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.props.callback({
            categoryName: this.props.categoryName, 
            menuItemId: this.props.menuItemId, 
            itemName: this.props.itemName,
            price: this.props.price,
            options: [],
            quantity: 1
        })
    };

    render() {
        return (
            <button className="btn btn-outline-secondary btn-sm" onClick={this.handleClick}>{this.props.buttonText}</button>
        )

    };
};

export default Button;