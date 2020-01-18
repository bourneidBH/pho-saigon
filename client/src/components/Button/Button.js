import React from "react";
import "./Button.css";

class Button extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            onClick: props.onClick,
            buttonText: props.buttonText,
            menuItemId: props.menuItemId,
            callback: props.callback
        } 
    
    };

    // send button id back to parent
    sendButtonId = () => {
        const childButtonId = this.state.menuItemId;
        this.props.callback(childButtonId);
    };

    render() {
        return (
            <button className="btn btn-outline-secondary btn-sm" onClick={this.state.onClick} data-id={this.state.menuItemId}>{this.state.buttonText}</button>
        )
    
    }
};

export default Button;