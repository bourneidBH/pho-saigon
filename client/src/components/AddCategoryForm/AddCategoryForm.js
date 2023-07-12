import React from "react";
import API from "../../utils/API";

class AddCategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      categoryName: "",
    };
  };

  // Handles updating component state when the user types into the input field
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();

    const newCategory = {
      categoryName: this.state.categoryName,
    }

    if (this.state.categoryName) {
      API.saveCategory(newCategory)
      // .then(API.getMenuItems()
      //   .then(res => {
      //       console.log("menu items : ", res.data);
      //   })
      //   .catch(err => console.log(err))
      // )
      // .catch(err => console.log(err));
    }

    this.setState({categoryName: ""})
  };

  render() {
    return(
      <form>
        <div className="form-group">
            <label htmlFor="categoryName">Menu Category Name</label>
            <input className="form-control" name="categoryName" id="categoryName" value={this.state.categoryName} type="text" placeholder="Category Name" onChange={this.handleChange} />
        </div>
        <button className="btn btn-secondary" type="submit" name="action" onClick={this.handleSubmit}>Add Category</button>
      </form>

    )
  };

};

export default AddCategoryForm;