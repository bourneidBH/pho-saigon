import React from "react";
import Header from "../components/Header";
// import MenuAdditionForm from "../components/MenuAdditionForm";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class AdminAddMenuItem extends React.Component {
    constructor (props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            menuItems: [],
            menuItemId: "",
            itemName: "",
            itemNameVietnamese: "",
            description: "",
            categoryName: "",
            price: "",
            image: "",
        };
    }

    // Handles updating component state when the user types into the input field
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    // Handles updating component state when the user changes drop-down selection
    handleSelectionChange = event => {
        this.setState({
            categoryName: event.target.value
        });
    };

    // Handles form submit
    handleFormSubmit = event => {
        event.preventDefault();

        const newItem = {
            menuItemId: this.state.menuItemId,
            itemName: this.state.itemName,
            itemNameVietnamese: this.state.itemNameVietnamese,
            description: this.state.description,
            categoryName: this.state.categoryName,
            price: this.state.price,
            image: this.state.image
        };
        console.log("item to be added: ", newItem);


        if (this.state.menuItemId && this.state.itemName && this.state.categoryName) {
            API.saveItem(newItem)
            .then(API.getMenuItems()
                .then(res => {
                    console.log("menu items : ", res.data);
                    this.setState({menuItems: res.data})
                })
                .catch(err => console.log(err))
            )
            .catch(err => console.log(err));

            this.setState({
                menuItemId: "",
                itemName: "",
                itemNameVietnamese: "",
                description: "",
                categoryName: "",
                price: "",
                image: "",
            })
        };
    };

    render() {
        return(
            <div>
                <Header />
                <Container fluid>
                    <Jumbotron 
                        h1="Add a menu item"
                    />
                </Container>

                <main>
                    {/* <MenuAdditionForm
                    menuItemId={this.state.menuItemId}
                    itemName={this.state.itemName}
                    itemNameVietnamese={this.state.itemNameVietnamese}
                    description={this.state.description}
                    categoryName={this.state.categoryName}
                    price={this.state.price}
                    image={this.state.image}
                    handleChange={this.props.handleChange}
                    handleSelectionChange={this.props.handleSelectionChange}
                    handleFormSubmit={this.handleFormSubmit}
                    /> */}

                    <Container>
                        <form>
                            <div className="form-group">
                                <label htmlFor="menuItemId">Item ID</label>
                                <input className="form-control" name="menuItemId" id="menuItemId" value={this.state.menuItemId} type="text" placeholder="Item ID" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="itemName">Item Name</label>
                                <input className="form-control" name="itemName" id="itemName" value={this.state.itemName} type="text" placeholder="Item Name" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="itemNameVietnamese">Vietnamese Name</label>
                                <input className="form-control" name="itemNameVietnamese" id="itemNameVietnamese" value={this.state.itemNameVietnamese} type="text" placeholder="Vietnamese Name" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" name="description" description="description" value={this.state.description} type="text" placeholder="Item description" rows="3" onChange={this.handleChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoryName">Menu Category</label>
                                <select className="form-control" id="categoryName" name="categoryName" defaultValue="None" onChange={this.handleSelectionChange}>
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
                                <label htmlFor="price">Price</label>
                                <input className="form-control" name="price" id="price" value={this.state.price} type="number" step={0.01} placeholder="price" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Image File Name</label>
                                <input className="form-control" name="image" id="image" defaultValue={"./images/" + this.state.image} type="text" placeholder="Image File Name" onChange={this.handleChange} />
                            </div>
                            <button className="btn btn-primary" type="submit" name="action" onClick={this.handleFormSubmit}>Add Item</button>
                        </form>
                    </Container>
                </main>
            </div>
        )
    };
    
};

export default AdminAddMenuItem;