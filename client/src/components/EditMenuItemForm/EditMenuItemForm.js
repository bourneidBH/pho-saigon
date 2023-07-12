import React, { useState, useContext } from 'react';
import API from '../../utils/API';
import "./EditMenuItemForm.css";
import TrashButton from "../TrashButton";
import AddOptionForm from "../AddOptionForm";
import { MenuContext } from '../../ctx/menuContext';

const EditMenuItemForm = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const { menu, setMenu } = useContext(MenuContext)

  // Handles updating component state when the user types into the input field
  const handleInputChange = event => {
    setSelectedItem({
      ...selectedItem,
      [event.target.name]: event.target.value
    });
  };

  const handleOptionChange = (i, value) => {
    setSelectedItem({
      ...selectedItem,
      options: selectedItem?.options?.map((option, index) => (
        index === i ? {...option, optionPrice: parseFloat(value)} : option
      ))
    });
  };

  const handleOptionTrashClick = (id) => {
    const updatedOptions = selectedItem?.options?.filter((opt) => !opt._id === id);
    setSelectedItem({
      ...selectedItem,
      options: updatedOptions
    });
  };

  //   // Handles updating component state when the user changes drop-down selection
  const handleItemChange = e => {
    const selectedItemId = e.target.value
    const selected = menu?.length > 0 && menu?.find(item => item._id === selectedItemId)
    setSelectedItem(selected)
  };

  const resetForm = () => {
    document.getElementById('edit-item-form').reset();
    setSelectedItem(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const itemData = {
      ...selectedItem,
      itemName: selectedItem.itemName,
      itemNameVietnamese: selectedItem.itemNameVietnamese,
      description: selectedItem.description,
      price: selectedItem.price,
      image: selectedItem.image,
      options: selectedItem.options,
    }
    
    try {
      await API.updateItem(selectedItem._id, itemData)
      const result = await API.getMenuItems()
      setMenu(result?.data)
    } catch (err) {
      console.log(err)
    }
    
    resetForm();
  };


  return (
    <form id="edit-item-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="selectItem">Select an item to edit</label>
        <select className="form-control" id="_id" name="_id" onChange={handleItemChange}>
          <option value="">Select an item to edit</option>
          {menu?.map(item => (
            <option key={item._id} value={item._id}>{item.menuItemId}. {item.itemName}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input className="form-control" name="itemName" id="itemName" value={selectedItem?.itemName || ""} type="text" onChange={handleInputChange} />
      </div>
      <div className="form-group">
          <label htmlFor="itemNameVietnamese">Vietnamese Name</label>
          <input className="form-control" name="itemNameVietnamese" id="itemNameVietnamese" value={selectedItem?.itemNameVietnamese || ""} type="text" onChange={handleInputChange} />
      </div>
      <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" name="description" id="description" value={selectedItem?.description || ""} onChange={handleInputChange} rows="3" />
      </div>
      <div className="form-group">
          <label htmlFor="price">Price</label>
          <input className="form-control" name="price" id="price" value={selectedItem?.price || ""} onChange={handleInputChange} type="number" step={0.01} min="0" />
      </div>
      <div className="form-group">
          <label htmlFor="image">Image file name (include file path ./images/)</label>
          <input className="form-control" name="image" id="image" value={selectedItem?.image || ""} type="text" onChange={handleInputChange} />
      </div>

      {selectedItem?.options?.length > 0 ? <p><strong>Options for this item:</strong></p> : null}
      {selectedItem?.options?.map((option, i) => (
        <div className="form-group row" key={option._id}>
          <div className="col-sm-2">{option.optionName}</div>
          <label htmlFor="optionPrice" className="col-sm-1 col-form-label">Price</label>
          <div className="col-sm-8">
            <input className="form-control" name="optionPrice" id="optionPrice" type="number" step={0.01} min="0" value={option.optionPrice || ""} onChange={event => handleOptionChange(i, parseFloat(event.target.value))} />
          </div>
          <div className="col-sm-1">
            <TrashButton 
              onClick={() => handleOptionTrashClick(option._id)}
            />
          </div>
        </div>
      ))}
      <AddOptionForm 
        selectedItem={selectedItem}
      />
      <button className="btn btn-secondary" type="submit" id={selectedItem?._id} value="Submit">Submit</button>
    </form>
  )
}

export default EditMenuItemForm;