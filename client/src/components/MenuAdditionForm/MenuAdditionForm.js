import React from "react";
import "./MenuAdditionForm.css";
import AddOptionForm from "../AddOptionForm";

function MenuForm(props) {
    const {
        menuItemID,
        itemName,
        itemNameVietnamese,
        description,
        // categoryName,
        price,
        image,
        handleChange,
        handleSelectionChange,
        handleFormSubmit
    } = props;

    return(
        <form>
            <div className="form-group">
                <label htmlFor="menuItemID">Item ID</label>
                <input className="form-control" name="menuItemID" id="menuItemID" value={menuItemID} type="text" placeholder="Item ID" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="itemName">Item Name</label>
                <input className="form-control" name="itemName" id="itemName" value={itemName} type="text" placeholder="Item Name" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="itemNameVietnamese">Vietnamese Name</label>
                <input className="form-control" name="itemNameVietnamese" id="itemNameVietnamese" value={itemNameVietnamese} type="text" placeholder="Vietnamese Name" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input className="form-control" name="description" description="description" value={description} type="text" placeholder="Item description" size="50" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="categoryName">Menu Category</label>
                <select className="form-control" id="categoryName" name="categoryName" defaultValue="None" onChange={handleSelectionChange}>
                    <option value="None" disabled>Select the category for this item</option>
                    <option value="Appetizers">Appetizers</option>
                    <option value="Salads">Salads</option>
                    <option value="Sandwiches">Sandwiches</option>
                    <option value="Pho">Pho</option>
                    <option value="Specials">Specials</option>
                    <option value="Hot Pots">Hot Pots</option>
                    <option value="Vermicelli (Dry Noodles)">Vermicelli (Dry Noodles)</option>
                    <option value="Rice Dishes">Rice Dishes</option>
                    <option value="Beverages">Beverages</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input className="form-control" name="price" id="price" value={price} type="number" step={0.01} placeholder="price" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image File Name</label>
                <input className="form-control" name="image" id="image" defaultValue={"./images/" + image} type="text" placeholder="Image File Name" onChange={handleChange} />
            </div>
            <AddOptionForm
                optionName={this.optionName}
                handleChange={this.handleChange}
                addOption={this.addOption}
            />

            <button className="btn btn-primary" type="submit" name="action" onClick={handleFormSubmit}>Add Item</button>
        </form>
    )
}

export default MenuForm;