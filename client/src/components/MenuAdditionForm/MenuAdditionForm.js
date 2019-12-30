import React from "react";
import "./MenuAdditionForm.css";
import Container from "../Container";

function MenuForm(props) {
    const {
        menuItemID,
        itemName,
        itemNameVietnamese,
        description,
        categoryName,
        price,
        image,
        handleChange,
        handleSelectionChange,
        handleFormSubmit
    } = props;

    return(
        <Container>
            <form>
                <div className="form-group">
                    <label for="menuItemID">Item ID</label>
                    <input className="form-control" name="menuItemID" id="menuItemID" defaultValue={menuItemID} type="text" placeholder="Item ID" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="itemName">Item Name</label>
                    <input className="form-control" name="itemName" id="itemName" defaultValue={itemName} type="text" placeholder="Item Name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="itemNameVietnamese">Vietnamese Name</label>
                    <input className="form-control" name="itemNameVietnamese" id="itemNameVietnamese" defaultValue={itemNameVietnamese} type="text" placeholder="Vietnamese Name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <input className="form-control" name="description" description="description" defaultValue={description} type="text" placeholder="Item description" size="50" onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="categoryName">Menu Category</label>
                    <select className="form-control" id="categoryName" name="categoryName" defaultValue={categoryName} onChange={handleSelectionChange}>
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
                    <label for="price">Price</label>
                    <input className="form-control" name="price" id="price" defaultValue={price} type="number" step={0.01} placeholder="price" onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="image">Upload Image</label>
                    <input type="file" className="form-control-file" id="image" value={image} />
                </div>
                <button className="btn btn-primary" type="submit" name="action" onClick={handleFormSubmit}>Add Item</button>
            </form>
        </Container>
    )
}

export default MenuForm;