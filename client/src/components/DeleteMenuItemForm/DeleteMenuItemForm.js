import React from "react";
import Container from "../Container";
import API from "../../utils/API";
import "./DeleteMenuItemForm.css";

class DeleteMenuItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.state = {
      menu: [],
      selectedItemId: "",
      selectedItem: {},
    };
  };

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
            categoryName = "Rice Dishes";
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
      }, () => {console.log("selected item: ", this.state.selectedItem)});    
    });
  };

  resetForm = () => {
    document.getElementById('delete-item-form').reset();
    this.setState({
      selectedItemId: "",
      selectedItem: {},
    });
  };

  // Handle form submit
  handleSubmit = event => {
    event.preventDefault();

    const id = this.state.selectedItem._id;
    API.deleteItem(id)
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
        <form id="delete-item-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="selectItem">Select an item to delete</label>
            <select className="form-control" id="selectedItemId" name="selectedItemId"  defaultValue="None" onChange={this.handleItemChange}>
              <option value="None" disabled>Select an item to delete</option>
              {this.state.menu.map(MenuCategory => (
                MenuCategory.categoryItems.map((item, i) => (
                  <option key={i} value={item.menuItemId}>{item.menuItemId}. {item.itemName}</option>
                ))
              ))}
            </select>
          </div>
          {this.state.selectedItemId !== "" ? 
            <div>
                <p>Are you sure you want to delete {this.state.selectedItem.itemName}?</p>
                <button className="btn btn-outline-secondary" onClick={this.resetForm}>No</button>
                <button className="btn btn-secondary" type="submit" value="submit">Yes</button>
            </div>
            : null 
          }
        </form>
      </Container>
    )
  };
};

export default DeleteMenuItemForm;