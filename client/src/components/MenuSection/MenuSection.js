import React from "react";
import API from "../../utils/API.js";
import "./MenuSection.css";
import Container from "../Container";
import MenuItem from "../MenuItem";
import ItemOptionsForm from "../ItemOptionsForm";

class MenuSection extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            menu: [],
            order: [],
            selectedOptions: []
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.getOrderPrices = this.getOrderPrices.bind(this);
        this.calculateSubtotal = this.calculateSubtotal.bind(this);
        this.calculateTax = this.calculateTax.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
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

    //use callback to get categoryName, menuItemId, optionName from child form component
    handleOptionChange = (categoryName, menuItemId, optionName) => {

        // locate which option in which item is changed
        const cat = this.state.menu.find(cat => cat.categoryName === categoryName);
        const menuItem = cat.categoryItems.find(item => item.menuItemId === menuItemId);
        const option = menuItem.options.find(option => option.optionName === optionName);
                
        // find index of the checked option in options array 
        // and splice in the new checked value
        const optionIndex = menuItem.options.indexOf(option);
        
        // toggle checked boolean value
        // for radio buttons loop through options & set all except current selected to false
        if (option.optionType === "radio") {
            for (let i = 0; i < menuItem.options.length; i++) {
                if (i !== optionIndex) {
                    menuItem.options[i].checked = false;        
                } else {
                    option.checked = !option.checked;
                    console.log(option.optionName + " checked: " + option.checked);
                };
            };  
        } else {
            // for checkboxes
            option.checked = !option.checked;
            console.log(option.optionName + " checked: " + option.checked);
        }

        menuItem.options.splice(optionIndex, 1, option);

        if (option.checked && this.state.selectedOptions.includes(menuItem) === false) {
            // if menuItem not already included in selectedOptions array
            // spread prevState to add menuItem with new checked value
            this.setState(prevState => ({
                ...prevState,
                selectedOptions: [
                    ...prevState.selectedOptions,
                    menuItem
                ]
            }), () => console.log("items with selected options: ", this.state.selectedOptions));
        } 
        else if (option.checked && this.state.selectedOptions.includes(menuItem) === true) {
            // const itemIndex = this.state.selectedOptions.indexOf(menuItem);
            
            // if menuItem is already included in selectedOptions array replace it with updated version
            this.setState(
                this.state.selectedOptions
                .filter(arr => arr !== menuItem)
                .concat(menuItem), 
            () => console.log("items with selected options: ", this.state.selectedOptions));
        };
    };

    // use callback function to get info from child button component
    addToOrder = (selectedItem) => {
        console.log("selected item ", selectedItem)
        
        // add any selected options from selectedOptions array to selectedItem.options
        for (let i = 0; i < this.state.selectedOptions.length; i++) {
            if (selectedItem.menuItemId === this.state.selectedOptions[i].menuItemId) {
                
                const options = this.state.selectedOptions[i].options
                .filter(option => option.checked);

                selectedItem.options.push(options);
            };
        };

        // update order state with new selectedItem
        this.setState({order: this.state.order.concat(selectedItem)}, 
        () => {
            console.log("order", this.state.order);

            /* remove selected item from selectedOptions array 
            in case another of that same menu item is added to order
            with different options from the first one.  */

            for (let i = 0; i < this.state.selectedOptions.length; i++) {
                if (this.state.selectedOptions[i].menuItemId === selectedItem.menuItemId) {

                    this.setState({
                        selectedOptions: this.state.selectedOptions.filter(arr => arr !== this.state.selectedOptions[i])
                    }, () => console.log("items with selected options: ", this.state.selectedOptions))
                };
            };
        });
    };

    getOrderPrices = () => {
        let orderPrices = [];

        this.state.order.forEach(function(item) {
            if (item.options.length > 0) {
                let optionPrices = item.options.map(option => (
                    option.map(optionIndex => optionIndex.optionPrice)
                ))
                .reduce(function(total, num) {
                    return total + num;
                });
                let optionsTotal = optionPrices.reduce(function(total, num) {
                    return total + num;
                });
                let itemSubtotal = optionsTotal + item.price;
                orderPrices.push(itemSubtotal);

            } else {
                let itemSubtotal = item.price;
                orderPrices.push(itemSubtotal);
            };
        });
        return orderPrices;
    };

    calculateSubtotal = () => {
        const orderPrices = this.getOrderPrices();
        console.log("order prices: ", orderPrices)

        const orderSubtotal = orderPrices.reduce(function(total, num) {
            return total + num;
        }, 0).toFixed(2);
        console.log("order subtotal: ", orderSubtotal);
        return orderSubtotal;
    }

    calculateTax = () => {
        const subtotal = this.calculateSubtotal();
        console.log("subtotal: ", subtotal);
        const tax = (subtotal * .056).toFixed(2);
        console.log("tax: ", tax);
        return tax; 
    };

    calculateTotal = () => {
        const subtotal = parseFloat(this.calculateSubtotal());
        const tax = parseFloat(this.calculateTax());
        const total = subtotal + tax;
        return total;
    }
      
    render() {        
        return (
            <div>
                <p className="centered margin-bottom">Dine in or carry out. For carry-out call <a href="tel:4148289698">414-828-9698</a> or use the online order form below. Pay at the restaurant when you pick up your order.</p>
                <p className="centered">
                    <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        View your order
                    </button>
                </p>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <ul>
                            {this.state.order.map((item, index) => (
                                <li key={index}>
                                    <h6>{item.menuItemId}. {item.itemName} {item.price ? <span className="price">${item.price}</span> : <span className="price">Market price</span>}</h6>
                                    <ul>
                                        {item.options.map((option) => (
                                            option.map((optionIndex, i) => (
                                                <li key={i}>{optionIndex.optionName} {optionIndex.optionPrice ? <span className="price">${optionIndex.optionPrice}</span> : null}</li>
                                            ))
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <hr />
                        <p>Subtotal: <span className="price">{this.calculateSubtotal()}</span></p>
                        <p>Tax: <span className="price">{this.calculateTax()}</span></p>
                        <p>Total: <span className="price">{this.calculateTotal()}</span></p>
                    </div>
                </div>
                {this.state.menu.map(MenuCategory => (
                    <Container key={MenuCategory._id}>
                        <div className="inner">
                            <h3>{MenuCategory.categoryName}</h3>

                            {MenuCategory.categoryItems.map((item, i) => (
                                <div key={i}>
                                    <MenuItem 
                                    menuItemId={item.menuItemId}
                                    itemName={item.itemName}
                                    itemNameVietnamese={item.itemNameVietnamese}
                                    description={item.description}
                                    categoryName={item.categoryName}
                                    price={item.price}
                                    image={item.image}
                                    callback={this.addToOrder}
                                    />

                                    {item.options.length > 0 ?
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p><strong>Options:</strong></p>
                                            {item.options.map((option, index) => (
                                                <ItemOptionsForm
                                                key={index}
                                                menuItemId={item.menuItemId}
                                                categoryName={item.categoryName}
                                                optionType={option.optionType}
                                                optionName={option.optionName}
                                                optionPrice={option.optionPrice}
                                                checked={option.checked}
                                                callback={this.handleOptionChange}
                                                />
                                            ))}
                                        </div>
                                    </div> : null
                                    }

                                </div>
                            ))}
                        </div>
                    </Container>
                ))}
            </div>
        )
    };
};

export default MenuSection;