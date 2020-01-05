import React from "react";
import Header from "../components/Header";
import MenuAdditionForm from "../components/MenuAdditionForm";
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


        // if (this.state.menuItemId && this.state.itemName && this.state.categoryName) {
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
    // };

    render() {
        return(
            <div>
                <Header 
                    h1="Add a menu item"
                />
                <main>
                    <MenuAdditionForm
                    menuItemId={this.props.menuItemId}
                    itemName={this.props.itemName}
                    itemNameVietnamese={this.props.itemNameVietnamese}
                    description={this.props.description}
                    categoryName={this.props.categoryName}
                    price={this.props.price}
                    image={this.props.image}
                    handleChange={this.props.handleChange}
                    handleSelectionChange={this.props.handleSelectionChange}
                    onClick={this.props.handleFormSubmit}
                    />

                </main>
            </div>
        )
    };
    
};

export default AdminAddMenuItem;