import React from "react";
import "./ItemOptionsForm.css";

class ItemOptionsForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange() {
        this.props.callback(this.props.categoryName, this.props.menuItemId, this.props.optionName, this.props.optionPrice)
    }

    render() {
        return (
            <div className="form-check form-check-inline">
                {this.props.optionType === "radio" ? 
                    <input className="form-check-input" type="radio" name={this.props.menuItemId} id={this.props.optionName} value={this.props.optionName} onClick={this.handleChange} /> : 
                    <input className="form-check-input" type="checkbox" name={this.props.menuItemId} id={this.props.optionName} value={this.props.optionName} onClick={this.handleChange} />
                }
                <label className="form-check-label option" htmlFor={this.props.optionName}>{this.props.optionPrice ? this.props.optionName + " $" + this.props.optionPrice : this.props.optionName}</label>
            </div>
        )
    }
}

export default ItemOptionsForm;