import { useState, useContext } from 'react';
import { MenuContext } from '../../ctx/menuContext';
import API from '../../utils/API';
import './AddOptionForm.css';

const defaultNewOption = {
  optionName: "",
  optionPrice: 0,
  optionType: ""
}

function AddOptionForm({ selectedItem }) {
  const { setMenu } = useContext(MenuContext)
  const [newOption, setNewOption] = useState(defaultNewOption)

  const handleChange = (e) => {
    let { name, value, type} = e.target
    if (type === "number") value = parseFloat(value)
    setNewOption({
      ...newOption,
      [name]: value
    })
  }

  const resetForm = () => {
    document.getElementById('edit-item-form').reset();
    setNewOption(defaultNewOption);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const itemData = {
      ...selectedItem,
      options: [
        ...selectedItem.options,
        newOption
      ],
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


  return(
    <div className="form-group">
    <p>Add an option to this item 
      <button className="add"  type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <i className="material-icons">note_add_outline</i>
      </button>
    </p>
    
    <div className="collapse" id="collapseExample">
      <div className="form-group row">
        <div className="col-sm-3">
          <input className="form-control" name="optionName" id="optionName" type="text" value={newOption?.optionName || ""} placeholder="Option name" onChange={handleChange} />
        </div>
        <div className="col-sm-5">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="optionType" id="radio" value="radio" onChange={handleChange} />
            <label className="form-check-label" htmlFor="radio">
              Allow only 1 selection
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="optionType" id="checkbox" value="checkbox" onChange={handleChange} />
            <label className="form-check-label" htmlFor="checkbox">
              Allow multiple option selections
            </label>
          </div>
        </div>
        <div className="col-sm-2">
          <input className="form-control" name="optionPrice" id="optionPrice" type="number" step={0.01} value={newOption?.optionPrice || 0} placeholder="Option price" onChange={handleChange} />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-sm btn-secondary" type="submit" onClick={handleSubmit} disabled={!newOption?.optionName || !newOption?.optionType}>Add option</button>
        </div>
      </div>
    </div>
  </div>

  )
};

export default AddOptionForm;