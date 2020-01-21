import React from "react";
import "./ItemOptionsForm.css";

function ItemOptionsForm(props) {
    const {
        menuItemId,
        handleOptionChange,
        optionName,
        optionPrice
    } = props;

    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id={menuItemId} value={optionName} onChange={handleOptionChange} />
            <label className="form-check-label option" htmlFor={optionName}>{optionPrice ? optionName + " $" + optionPrice : optionName}</label>
        </div>
    )
}

export default ItemOptionsForm;