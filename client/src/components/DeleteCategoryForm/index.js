import { useContext, useState } from "react";
import Container from "../Container";
import API from "../../utils/API";
import "./DeleteCategoryForm.css";
import { MenuContext } from "../../ctx/menuContext";

const DeleteCategoryForm = () => {
  const { categories, setCategories } = useContext(MenuContext)
  const [selectedItem, setSelectedItem] = useState(null)

  // Handles updating component state when the user changes drop-down selection
  const handleItemChange = e => {
    const selectedItemId = e.target.value
    const selected = categories?.length > 0 && categories?.find(item => item._id === selectedItemId)
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
      await API.deleteCategory(id)
      const result = await API.getCategories();
      setCategories(result?.data)
    } catch (err) {
      console.log(err)
    }
    
    resetForm();
  };

    return(
    <Container>
      <form id="delete-item-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="selectItem">Select a category to delete</label>
          <select className="form-control" id="_id" name="_id"  onChange={handleItemChange}>
            <option value="">Select a category to delete</option>
            {categories?.length > 0 && categories?.map((item) => (
              <option key={item._id} value={item._id} onChange={handleItemChange}>{item.categoryName}</option>
            ))}
          </select>
        </div>
        {selectedItem !== null ? 
          <div className="padding-bottom">
              <p>Are you sure you want to delete {selectedItem.categoryName}?</p>
              <button className="btn btn-outline-secondary float-left" onClick={resetForm}>No</button>
              <button className="btn btn-secondary float-left" type="submit" value="submit">Yes</button>
          </div>
          : null 
        }
      </form>
    </Container>
  )
}

export default DeleteCategoryForm;