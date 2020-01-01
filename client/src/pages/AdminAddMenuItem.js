import React from "react";
import Header from "../components/Header";
import MenuAdditionForm from "../components/MenuAdditionForm";
import API from "../utils/API";

class AdminAddMenuItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menuItems: [],
            menuItemId: props.menuItemId,
            itemName: props.itemName,
            itemNameVietnamese: props.itemNameVietnamese,
            description: props.description,
            categoryName: props.categoryName,
            price: props.price,
            image: props.image,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // Handles updating component state when the user types into the input field
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
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

        // if (this.state.menuItemId && this.state.itemName && this.state.categoryName) {
            console.log("item to be added: ", this.state.itemName);
            API.saveItem({
                menuItemId: this.state.menuItemId,
                itemName: this.state.itemName,
                itemNameVietnamese: this.state.itemNameVietnamese,
                description: this.state.description,
                categoryName: this.state.categoryName,
                price: this.state.price,
                image: this.state.image
            })
            .then(API.getMenuItems()
                .then(res => {
                    console.log("res.data: ", res.data);
                    this.setState({menuItems: res.data})
                })
                .catch(err => console.log(err))
            )
            .catch(err => console.log(err));
        };
    // };

    render() {
        return(
            <div>
                <Header 
                    h1="Add a menu item"
                />
                <main>
                    <MenuAdditionForm
                    menuItemId={this.state.menuItemId}
                    itemName={this.state.itemName}
                    itemNameVietnamese={this.state.itemNameVietnamese}
                    description={this.state.description}
                    categoryName={this.state.categoryName}
                    price={this.state.price}
                    image={this.state.image}
                    handleChange={this.handleChange}
                    handleSelectionChange={this.handleSelectionChange}
                    onClick={this.handleFormSubmit}
                    />

                </main>
            </div>
        )
    };
    
};

export default AdminAddMenuItem;