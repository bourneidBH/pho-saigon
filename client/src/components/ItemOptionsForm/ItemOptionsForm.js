import React from "react";
import "./ItemOptionsForm.css";

function ItemOptionsForm(props) {
    const {
        handleOptionChange,
        optionName,
        optionPrice
    } = props;

    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id={optionName} value={optionName} onChange={handleOptionChange} />
    <label className="form-check-label option" htmlFor={optionName}>{optionPrice ? optionName + " $" + optionPrice : optionName}</label>
        </div>
    )
}

export default ItemOptionsForm;