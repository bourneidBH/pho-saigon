import React from 'react';
import './AddOptionForm.css';

function AddOptionForm(props) {
  const { optionName, optionPrice, handleChange, addOption } = props

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
          <input className="form-control" name="optionName" id="optionName" type="text" value={optionName} placeholder="Option name" onChange={handleChange} />
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
          <input className="form-control" name="optionPrice" id="optionPrice" type="number" step={0.01} value={optionPrice} placeholder="Option price" onChange={handleChange} />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-sm btn-secondary" type="submit" onClick={addOption}>Add option</button>
        </div>
      </div>
    </div>
  </div>

  )
};

export default AddOptionForm;