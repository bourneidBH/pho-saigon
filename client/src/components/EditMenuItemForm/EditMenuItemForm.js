import React from 'react';
import Container from '../Container';
import API from '../../utils/API';
import "./EditMenuItemForm.css";
import TrashButton from "../TrashButton";
import AddOptionForm from "../AddOptionForm";

class EditMenuItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleOptionTrashClick = this.handleOptionTrashClick.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.addOption = this.addOption.bind(this);
    this.description = React.createRef();
    this.price = React.createRef();
    this.itemNameVietnamese = React.createRef();
    this.itemName = React.createRef();
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
      optionName: "",
      optionPrice: "",
      optionType: "",    
    };
  };

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
  };

  handleOptionTrashClick = (i) => {
    console.log("Option " + i + " of item " + this.state.selectedItemId + " clicked");
    const item = this.state.selectedItem;
    const updatedOptions = item.options.slice(0, i).concat(item.options.slice(i + 1, item.options.length));
    this.setState({
      options: updatedOptions
    });
  };

  addOption = event => {
    event.preventDefault();

    const newOption = {
      optionName: this.state.optionName,
      optionPrice: this.state.optionPrice,
      optionType: this.state.optionType,
    }

    const updatedOptions = [
      ...this.state.options.concat(newOption)
    ]

    this.setState({
      options: updatedOptions
    }, () => console.log("updated options: ", this.state.options))
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
      optionName: "",
      optionPrice: "",
      optionType: "",    
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const id = this.state.selectedItem._id;

    const itemData = {
      _id: this.state.selectedItem._id,
      menuItemId: this.state.selectedItem.menuItemId,
      itemName: this.itemName.current.value,
      itemNameVietnamese: this.itemNameVietnamese.current.value,
      description: this.description.current.value,
      price: this.price.current.value,
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
        <form id="edit-item-form" onSubmit={this.handleSubmit}>
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
              <label htmlFor="itemName">Item Name</label>
              <input className="form-control" name="itemName" id="itemName" ref={this.itemName} type="text" defaultValue={this.state.selectedItem.itemName} />
          </div>
          <div className="form-group">
              <label htmlFor="itemNameVietnamese">Vietnamese Name</label>
              <input className="form-control" name="itemNameVietnamese" id="itemNameVietnamese" ref={this.itemNameVietnamese} type="text" defaultValue={this.state.selectedItem.itemNameVietnamese} />
          </div>
          <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" name="description" id="description" ref={this.description} defaultValue={this.state.selectedItem.description} rows="3"></textarea>
          </div>
          <div className="form-group">
              <label htmlFor="price">Price</label>
              <input className="form-control" name="price" id="price" ref={this.price} defaultValue={this.state.selectedItem.price} type="number" step={0.01} />
          </div>

          {this.state.options.length > 0 ? <p><strong>Options for this item:</strong></p> : null}
          {this.state.options.map((option, i) => (
            <div className="form-group row" key={i}>
              <div className="col-sm-2">{option.optionName}</div>
              <label htmlFor="optionPrice" className="col-sm-1 col-form-label">Price</label>
              <div className="col-sm-8">
                <input className="form-control" name="optionPrice" id="optionPrice" type="number" step={0.01} ref={this.optionPrice} defaultValue={this.state.options[i].optionPrice} onChange={event => this.handleOptionChange(i, parseFloat(event.target.value))} />
              </div>
              <div className="col-sm-1">
                <TrashButton 
                  onClick={() => this.handleOptionTrashClick(i)}
                />
              </div>
            </div>
          ))}
          <AddOptionForm 
            optionName={this.optionName}
            handleChange={this.handleChange}
            addOption={this.addOption}
          />
          {/* <div className="form-group">
            <p>Add an option to this item <AddOptionButton /></p>
            
            <div className="collapse" id="collapseExample">
              <div className="form-group row">
                <div className="col-sm-4">
                  <input className="form-control" name="optionName" id="optionName" type="text" value={this.optionName} placeholder="Option name" onChange={this.handleChange} />
                </div>
                <div className="col-sm-6">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="optionType" id="radio" value="radio" onChange={this.handleChange} />
                    <label className="form-check-label" htmlFor="radio">
                      Allow only 1 selection
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="optionType" id="checkbox" value="checkbox" onChange={this.handleChange} />
                    <label className="form-check-label" htmlFor="checkbox">
                      Allow multiple option selections
                    </label>
                  </div>
                </div>
                <div className="col-sm-2">
                  <button className="btn btn-sm btn-secondary" type="submit" onClick={this.addOption}>Add option</button>
                </div>
              </div>
            </div>
          </div> */}
          <button className="btn btn-secondary" type="submit" id={this.state.selectedItem._id} value="Submit">Submit</button>
        </form>
      </Container>
    )
  };
};
export default EditMenuItemForm;