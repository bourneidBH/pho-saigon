import React from 'react';
import Container from '../Container';
import API from '../../utils/API';
import "./EditMenuItemForm.css";

class EditMenuItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.description = React.createRef();
    this.price = React.createRef();
    this.itemNameVietnamese = React.createRef();
    this.optionPrice = React.createRef();

    this.state = {
      menu: [],
      selectedItemId: "",
      selectedItem: {},
      itemName: "",
      itemNameVietnamese: "",
      description: "",
      categoryName: "",
      price: "",
      image: "",
      options: [],
      optionPrice: "",
    }

  }

  // Handles updating component state when the user types into the input field
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleOptionChange = (i, value) => {
    this.setState({
      options: this.state.options.map((option, index) => (
        index === i ? {...option, optionPrice: value} : option
      )),
  }, () => console.log("options: ", this.state.options));

  }

  // Handles updating component state when the user changes drop-down selection
  handleItemChange = event => {
    this.setState({
        selectedItemId: event.target.value
    }, () => {
      console.log("selected item ID: ", this.state.selectedItemId);
      console.log("char at 0: ", this.state.selectedItemId.charAt(0));

      // identify which category item belongs to
      let categoryName = "";
      let categoryChar = this.state.selectedItemId.charAt(0);
      let categoryChar2 = this.state.selectedItemId.charAt(1);

      if (categoryChar === "S") {
        
        switch (categoryChar2) {
          case "L": 
            categoryName = "Salads";
            break;
          case "W": 
            categoryName = "Sandwiches";
            break;
          default:
            categoryName = "Specials";
        };
        console.log("category name: ", categoryName);

      } else {
        switch (categoryChar) {
          case "A": 
            categoryName = "Appetizers";
            break;
          case "P": 
            categoryName = "Pho";
            break;
          case "H": 
            categoryName = "Hot Pots";
            break;
          case "V": 
            categoryName = "Vermicelli (Dry Noodles)";
            break;
          case "R": 
            categoryName = "Rice Dished";
            break;
          default:
            categoryName = "Beverages";
        };
        console.log("category name: ", categoryName);
      }
      // locate which item to be changed
      const cat = this.state.menu.find(cat => cat.categoryName === categoryName);
      const menuItem = cat.categoryItems.find(item => item.menuItemId === this.state.selectedItemId);
      console.log("item: ", menuItem);
  
      this.setState({
        selectedItem: menuItem
      }, () => {
        console.log("selected item: ", this.state.selectedItem)
        this.setState({
          options: this.state.selectedItem.options
        }, () => console.log("options: ", this.state.options)
        )
      });    
    });
  };

  resetForm = () => {
    document.getElementById('edit-item-form').reset();
        this.setState({
          selectedItemId: "",
          selectedItem: {},
          itemName: "",
          itemNameVietnamese: "",
          description: "",
          categoryName: "",
          price: "",
          image: "",
          options: [],
          optionPrice: "",    
        });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const id = this.state.selectedItem._id;

    const itemData = {
      _id: this.state.selectedItem._id,
      menuItemId: this.state.selectedItem.menuItemId,
      itemName: this.state.selectedItem.itemName,
      itemNameVietnamese: this.state.itemNameVietnamese,
      description: this.state.description,
      price: this.state.price,
      options: this.state.options,
    }
    console.log("data to update: ", itemData, "item to update: ", id);
    
    API.updateItem(id, itemData)
    .then(
      API.getMenuItems()
      .then(res => {
        console.log("updated menu: ", res.data);
        this.setState({menu: res.data});
      })
      .catch(err => console.log(err))
    )
    .catch(err => console.log(err))
    
    this.resetForm();
  };
  
  // Method to get all menu items from database
  loadMenuItems = () => {
    API.getMenuItems()
    .then(res => {
        this.setState({menu: res.data});
        console.log("menu items: ", res.data);
    })
    .catch(err => console.log(err))
  };

  // Lifecycle method runs loadMenuItems when component mounts
  componentDidMount() {
      this.loadMenuItems()
  };

  render() {
    return(
      <Container>
        <form id="edit-item-form">
          <div className="form-group">
            <label htmlFor="selectItem">Select an item to edit</label>
            <select className="form-control" id="selectedItemId" name="selectedItemId"  defaultValue="None" onChange={this.handleItemChange}>
              <option value="None" disabled>Select an item to edit</option>
              {this.state.menu.map(MenuCategory => (
                MenuCategory.categoryItems.map((item, i) => (
                  <option key={i} value={item.menuItemId}>{item.menuItemId}. {item.itemName}</option>
                ))
              ))}
            </select>
          </div>
          <div className="form-group">
              <label htmlFor="itemNameVietnamese">Vietnamese Name</label>
              <input className="form-control" name="itemNameVietnamese" id="itemNameVietnamese" ref={this.state.itemNameVietnamese} type="text" defaultValue={this.state.selectedItem.itemNameVietnamese ? this.state.selectedItem.itemNameVietnamese : this.state.itemNameVietnamese} onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" name="description" id="description" ref={this.state.description} type="textarea" defaultValue={this.state.selectedItem.description ? this.state.selectedItem.description : this.state.description} rows="3" onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
              <label htmlFor="price">Price</label>
              <input className="form-control" name="price" id="price" ref={this.state.price} defaultValue={this.state.selectedItem.price ? this.state.selectedItem.price : this.state.price} type="number" step={0.01} onChange={this.handleChange} />
          </div>
          {this.state.options.length > 0 ? <p><strong>Options for this item:</strong></p> : null}
          {this.state.options.map((option, i) => (
            <div className="form-group row" key={i}>
              <div className="col-sm-2">{option.optionName}</div>
              <label htmlFor="optionPrice" className="col-sm-1 col-form-label">Price</label>
              <div className="col-sm-9">
                <input className="form-control" name="optionPrice" id="optionPrice" type="number" step={0.01} ref={option.optionPrice} defaultValue={this.state.options[i].optionPrice ? this.state.options[i].optionPrice : option.optionPrice} onChange={event => this.handleOptionChange(i, parseFloat(event.target.value))} />
              </div>
            </div>
          ))}
          <button className="btn btn-secondary" type="submit" id={this.state.selectedItem._id} onClick={this.handleSubmit}>Submit</button>
        </form>
      </Container>
    )
  };
};
export default EditMenuItemForm;