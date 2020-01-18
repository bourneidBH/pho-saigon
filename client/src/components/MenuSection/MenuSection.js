import React from "react";
import API from "../../utils/API.js";
import "./MenuSection.css";
import Container from "../Container";
import MenuItem from "../MenuItem";
import ItemOptionsForm from "../ItemOptionsForm";
// import Button from "../Button";

class MenuSection extends React.Component {
    constructor(props) {
        super(props) 

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.onClick = this.onClick.bind(this);
    
    };

    state = {
        menu: [],
        order: [],
        itemId: null
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

    handleOptionChange = event => {
        this.setState({[event.target.name]: event.target.checked});
    };

    // callback function to get data-id from child button component
    getButtonId = childButtonId => {
        this.setState({itemId: childButtonId})
    };

    // onClick method to add item to order
    onClick = () => {
        this.state.order.push(this.state.itemId);
        console.log("order", this.state.order);
    };
      
    render() {
        return (
            <div>
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
                                    onClick={this.onClick.bind(this)}
                                    callback={this.getButtonId}
                                    />

                                    {/* <Button
                                    menuItemId={item.menuItemId}
                                    onClick={this.onClick}
                                    buttonText="Add to order"
                                    /> */}

                                    {item.options.length > 0 ?
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p><strong>Options:</strong></p>
                                            {item.options.map((option, index) => (
                                                <ItemOptionsForm
                                                key={index}
                                                optionName={option.optionName}
                                                optionPrice={option.optionPrice}
                                                handleOptionChange={this.handleOptionChange}
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

