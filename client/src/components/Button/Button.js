import React from "react";
import "./Button.css";

class Button extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.props.callback(this.props.categoryName, this.props.menuItemId, this.props.itemName)
    };

    render() {
        return (
            <button className="btn btn-outline-secondary btn-sm" onClick={this.handleClick}>{this.props.buttonText}</button>
        )

    };
};

export default Button;