import React from "react";
import "./ItemOptionsForm.css";

function ItemOptionsForm(props) {
    const {
        menuItemId,
        handleOptionChange,
        optionType,
        optionName,
        optionPrice
    } = props;

    return (
        <div className="form-check form-check-inline">
            {optionType === "radio" ? 
                <input className="form-check-input" type="radio" name={menuItemId} id={optionName} value={optionName} onChange={handleOptionChange} /> : 
                <input className="form-check-input" type="checkbox" name={menuItemId} id={optionName} value={optionName} onChange={handleOptionChange} />
            }
            <label className="form-check-label option" htmlFor={optionName}>{optionPrice ? optionName + " $" + optionPrice : optionName}</label>
        </div>
    )
}

export default ItemOptionsForm;