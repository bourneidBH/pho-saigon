import React from "react";
import MenuAdditionForm from "../components/MenuAdditionForm";
import API from "../utils/API";

class AdminAddMenuItem extends React.Component {
    state = {
        menuItems: [],
        menuItemId: "",
        itemName: "",
        itemNameVietnamese: "",
        description: "",
        categoryName: "",
        price: 0,
        image: "",
    };

    // When the component mounts, load all menu items and save them to this.state.menuItems
    componentDidMount() {
        this.loadMenuItems();
    };

    // Load all menu items & set them to this.state.menuItems
    loadMenuItems = () => {
        API.getMenuItems()
        .then(res => this.setState({menuItems: res.data}))
        .catch(err => console.log(err))
    };

    // Handles updating component state when the user types into the input field
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    // Handles updating component state when the user types into the input field
    handleSelectionChange = event => {
        this.setState({
            categoryName: event.target.value
        });
    };

    // Handles form submit
    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.menuItemId && this.state.itemName && this.state.categoryName) {
            API.saveItem({
                menuItemId: this.state.menuItemId,
                itemName: this.state.itemName,
                itemNameVietnamese: this.state.itemNameVietnamese,
                description: this.state.description,
                categoryName: this.state.categoryName,
                price: this.state.price,
                image: this.state.image
            })
            .then(res => this.loadMenuItems())
            .catch(err => console.log(err));
        };
       
    };

    render() {
        return(
            <MenuAdditionForm
                menuItemId={this.state.menuItemId}
                itemName={this.state.itemName}
                itemNameVietnamese={this.state.itemNameVietnamese}
                description={this.state.description}
                categoryName={this.state.categoryName}
                price={this.state.price}
                image={this.state.image}
                onChange={this.handleChange}
                onClick={this.handleFormSubmit}
            />
        )
    };
    
};

export default AdminAddMenuItem;