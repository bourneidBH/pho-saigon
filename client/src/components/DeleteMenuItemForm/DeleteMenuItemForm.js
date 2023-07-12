import { useContext, useState } from "react";
import API from "../../utils/API";
import "./DeleteMenuItemForm.css";
import { MenuContext } from "../../ctx/menuContext";

const DeleteMenuItemForm = () => {
  const { menu, setMenu } = useContext(MenuContext)
  const [selectedItem, setSelectedItem] = useState(null)

  // Handles updating component state when the user changes drop-down selection
  const handleItemChange = e => {
    const selectedItemId = e.target.value
    const selected = menu?.length > 0 && menu?.find(item => item._id === selectedItemId)
    setSelectedItem(selected)
  };

  const resetForm = () => {
    document.getElementById('delete-item-form').reset();
    setSelectedItem(null)
  };

  // Handle form submit
  const handleSubmit = async event => {
    event.preventDefault();

    const id = selectedItem._id;
    try {
      await API.deleteItem(id)
      const result = await API.getMenuItems();
      setMenu(result?.data)
    } catch (err) {
      console.log(err)
    }
    
    resetForm();
  };

    return(
    <form id="delete-item-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="selectItem">Select an item to delete</label>
        <select className="form-control" id="_id" name="_id"  onChange={handleItemChange}>
          <option value="">Select an item to delete</option>
          {menu?.length > 0 && menu?.map((item, i) => (
            <option key={item._id} value={item._id} onChange={handleItemChange}>{item.menuItemId}. {item.itemName}</option>
          ))}
        </select>
      </div>
      {selectedItem !== null ? 
        <div className="padding-bottom">
            <p>Are you sure you want to delete {selectedItem.itemName}?</p>
            <button className="btn btn-outline-secondary float-left" onClick={resetForm}>No</button>
            <button className="btn btn-secondary float-left" type="submit" value="submit">Yes</button>
        </div>
        : null 
      }
    </form>
  )
}

export default DeleteMenuItemForm;