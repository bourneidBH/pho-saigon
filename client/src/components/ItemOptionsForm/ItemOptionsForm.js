import { useState } from "react";
import "./ItemOptionsForm.css";

const ItemOptionsForm = ({categoryName, menuItemId, optionName, optionPrice, optionType, checked, callback}) => {
    const [newCheckedVal, setNewCheckedVal] = useState(checked);

    const handleChange = () => {
        setNewCheckedVal(!newCheckedVal)
        callback(categoryName, menuItemId, optionName, !newCheckedVal)
    }

    return (
        <div className="form-check form-check-inline">
            {optionType === "radio" ? (
                <input 
                    className="form-check-input" 
                    type="radio" 
                    checked={newCheckedVal}
                    name={menuItemId} 
                    id={optionName} 
                    value={optionName} 
                    onChange={handleChange} 
                />
            ) : (
                <input 
                    className="form-check-input" 
                    type="checkbox"
                    checked={newCheckedVal} 
                    name={menuItemId} 
                    id={optionName} 
                    value={optionName} 
                    onChange={handleChange} 
                />
            )}
            <label className="form-check-label option" htmlFor={optionName}>
                {optionPrice ? `${optionName} ${optionPrice}` : optionName}
            </label>
        </div>
    )
}

export default ItemOptionsForm;